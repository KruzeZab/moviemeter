from django.urls import path

from autho.api import (
    TokenObtainPairAPIView,
    TokenRefreshAPIView,
    SignUpUserAPIView,
    GetCurrentUserAPIView,
)

urlpatterns = [
    path("signup/", SignUpUserAPIView.as_view(), name="signup"),
    path("token/", TokenObtainPairAPIView.as_view(), name="token_obtain_pair"),
    path(
        "token/refresh/",
        TokenRefreshAPIView.as_view(),
        name="token_refresh",
    ),
    path("", GetCurrentUserAPIView.as_view(), name="get_current_user"),
]
