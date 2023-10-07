from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .utils import recommend_movies


@csrf_exempt
def recommend_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    print("Hello")
    print(recommend_movies('Avatar'))
    return None

   