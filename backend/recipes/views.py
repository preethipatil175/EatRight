import requests
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class RecipeSearchView(APIView):
    def post(self, request):
        meal_type = request.data.get("meal_type")
        diet_type = request.data.get("diet_type")
        calories = request.data.get("calories")

        if not (meal_type and diet_type and calories):
            return Response(
                {"error": "meal_type, diet_type and calories are required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Spoonacular endpoint
        url = "https://api.spoonacular.com/recipes/complexSearch"

        params = {
            "diet": diet_type,         
            "type": meal_type,         
            "maxCalories": calories,   
            "number": 1,               
            "addRecipeInformation": True,
            "apiKey": settings.SPOONACULAR_API_KEY
        }

        try:
            response = requests.get(url, params=params)
            data = response.json()

            if not data["results"]:
                return Response({"message": "No recipes found"}, status=404)

            recipe = data["results"][0]

            formatted_response = {
                "name": recipe["title"],
                "image": recipe["image"],
                "ready_in_minutes": recipe["readyInMinutes"],
                "servings": recipe["servings"],
                "ingredients": [
                    item["original"] for item in recipe["extendedIngredients"]
                ],
                "instructions": recipe["instructions"]
            }

            return Response(formatted_response, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=500)
