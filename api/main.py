from fastapi import FastAPI
from api.routes.hype import router as hype_router
from api.routes.melody import router as melody_router

app = FastAPI()

app.include_router(hype_router)
app.include_router(melody_router)