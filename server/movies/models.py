from django.db import models
from django.db.models import Avg
from django.contrib.auth import get_user_model

from helpers.models import BaseModel, Image

User = get_user_model()


class Genre(BaseModel):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Rating(BaseModel):
    movie = models.ForeignKey("Movie", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    def __str__(self):
        return self.movie.title


class Movie(BaseModel):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"

    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    excerpt = models.CharField(max_length=155)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    year = models.IntegerField()
    director = models.CharField(max_length=150)
    cast = models.CharField(max_length=150)
    gross = models.CharField(max_length=150)

    description = models.TextField()
    main_poster = models.ImageField(upload_to="images/")
    images = models.ManyToManyField(Image, blank=True)

    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.DRAFT
    )

    _meta_title = models.CharField(
        verbose_name="meta title", max_length=100, null=True, blank=True
    )
    _meta_description = models.CharField(
        verbose_name="meta description", max_length=255, null=True, blank=True
    )

    def __str__(self):
        return self.title

    @property
    def overall_rating(self):
        ratings = Rating.objects.filter(movie=self)

        if ratings:
            average_rating = ratings.aggregate(avg_rating=Avg("rating"))["avg_rating"]
            return average_rating
        else:
            return 0

    @property
    def meta_title(self):
        return self._meta_title or self.title

    @property
    def meta_description(self):
        return self._meta_description or self.excerpt

    def is_published(self):
        return self.status == self.Status.PUBLISHED

    def is_draft(self):
        return self.status == self.Status.DRAFT
