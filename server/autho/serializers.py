"""
User serializers for autho app
"""
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken


User = get_user_model()


class TokenObtainSerializer(TokenObtainPairSerializer):
    """
    Token Obtain serializer for autho app.
    """

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username
        return token


class SignUpUserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model used in sign up.
    """

    email = serializers.EmailField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="A user with that email already exists.",
            ),
        ],
        label="Email",
        style={"input_type": "email"},
        help_text="Enter a valid email address.",
    )
    password2 = serializers.CharField(
        validators=[validate_password],
        label="Confirm password",
        style={"input_type": "password"},
        help_text="Enter the same password as before, for verification.",
    )

    class Meta:
        """
        Meta class for the serializer
        """

        model = User
        fields = ("email", "username", "password", "password2")

    def validate(self, attrs):
        """
        Check that the two password fields match.
        """
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."},
            )
        return attrs

    def create(self, validated_data):
        """
        Create a new user with encrypted password and return it.
        """
        del validated_data["password2"]
        return User.objects.create_user(**validated_data)

    def to_representation(self, instance):
        """
        Return the JWT token to the user on successful sign up.
        """
        refresh = RefreshToken.for_user(instance)
        access = refresh.access_token
        access["username"] = instance.username

        return {
            "refresh": str(refresh),
            "access": str(access),
        }


class UserDetailSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True)
    email = serializers.EmailField(read_only=True)
    public_key = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "first_name", "last_name", "public_key")
