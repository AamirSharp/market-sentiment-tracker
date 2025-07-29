from fastapi import FastAPI
from backend.database import SessionLocal
from backend.models import Base
from backend.database import engine

app = FastAPI()

# Create tables if not exist
Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Market Sentiment Tracker backend is live!"}
