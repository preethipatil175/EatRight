from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import openai


class RecipeChatView(APIView):
    def post(self, request):
        prompt = request.data.get("prompt")

        if not prompt:
            return Response(
                {"error": "prompt is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # ✅ set key HERE
            openai.api_key = settings.OPENAI_API_KEY

            completion = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": (
                            "You are a professional chef and nutrition expert. "
                            "Generate a healthy recipe with ingredients and steps."
                        )
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                temperature=0.7,
                max_tokens=500
            )

            reply = completion.choices[0].message.content

            return Response({"reply": reply}, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=500)
