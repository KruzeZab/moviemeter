from django.db import models

# Create your models here.

# Generate models for movie with fields  as title, excerpt, description, images, year, genre, director, cast, gross, slug. users can rate the movie.


class Movie(models.Model):
    title = models.CharField(max_length=255)
    excerpt = models.TextField()
