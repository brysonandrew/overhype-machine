from fastapi import FastAPI
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

@app.get("/api/hype")
def generate_hype(prompt: str):
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
        return {"error": str(e)}
