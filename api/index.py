from fastapi import FastAPI, Depends, Query
from openai import OpenAI
from dotenv import load_dotenv
import os

import logging

logger = logging.getLogger("uvicorn.error")

load_dotenv()


def get_openai_client():
    return OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


app = FastAPI()


@app.get("/api/hype")
def generate_hype(
    prompt: str = Query(..., description="Prompt to generate hype for"),
    client: OpenAI = Depends(get_openai_client),
):
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You're the Overhype Machine."},
                {"role": "user", "content": prompt},
            ],
        )
        return {"hype": response.choices[0].message.content}
    except Exception as e:
        logger.exception("Failed to generate hype")
        return {
            "error": "Something went wrong. The Hype Machine is recharging. " + str(e)
        }
