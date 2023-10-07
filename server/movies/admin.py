from django.contrib import admin
from .models import Genre, Rating, Movie

from helpers.admin import BaseModelAdmin


# Register your models here.
@admin.register(Genre)
class GenreAdmin(BaseModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "name",
                    "slug",
                )
            },
        ),
        (
            "Audit",
            {
                "fields": (
                    "is_active",
                    "created_at",
                    "updated_at",
                    "meta",
                ),
            },
        ),
    )
    readonly_fields = ("created_at", "updated_at")


@admin.register(Rating)
class RatingAdmin(BaseModelAdmin):
    list_display = ("movie", "user", "rating")
    list_filter = ("movie", "user")

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "movie",
                    "user",
                )
            },
        ),
        (
            "Audit",
            {
                "fields": (
                    "is_active",
                    "created_at",
                    "updated_at",
                    "meta",
                ),
            },
        ),
    )
    readonly_fields = ("created_at", "updated_at")


@admin.register(Movie)
class MovieAdmin(BaseModelAdmin):
    list_display = ("title", "genre", "director", "cast", "year", "overall_rating")
    prepopulated_fields = {"slug": ("title",)}
    list_filter = (
        "genre",
        "year",
        "director",
    )
    search_fields = ("title",)

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "title",
                    "slug",
                    "genre",
                    "excerpt",
                    "year",
                    "director",
                    "cast",
                    "gross",
                    "description",
                    "images",
                    "main_poster",
                    "status",
                )
            },
        ),
        (
            "Meta",
            {
                "fields": (
                    "_meta_title",
                    "_meta_description",
                )
            },
        ),
        (
            "Audit",
            {
                "fields": (
                    "is_active",
                    "created_at",
                    "updated_at",
                    "meta",
                ),
            },
        ),
    )
    readonly_fields = (
        "created_at",
        "updated_at",
    )
