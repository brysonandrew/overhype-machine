from fastapi import FastAPI
import openai
from dotenv import load_dotenv
import os

load_dotenv()  # Load .env file

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

@app.get("/hype")
def generate_hype(prompt: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You're the Overhype Machine."},
            {"role": "user", "content": prompt}
        ]
    )
    return {"hype": response.choices[0].message["content"]}