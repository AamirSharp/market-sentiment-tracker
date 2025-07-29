

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import requests
from datetime import datetime

from backend.database import SessionLocal, engine
from backend import models, schemas, crud

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

NEWS_API_KEY = "0a384e805bb841c3bfb340fe787a98ea"
NEWS_API_URL = "https://newsapi.org/v2/top-headlines?category=business&language=en"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/news", response_model=list[schemas.NewsArticleSchema])
def get_news(db: Session = Depends(get_db)):
    headers = {"Authorization": NEWS_API_KEY}
    response = requests.get(NEWS_API_URL, headers=headers)
    data = response.json()

    articles_to_return = []

    for article in data.get("articles", []):
        title = article.get("title")
        if not title:
            continue

        existing_article = crud.get_article_by_title(db, title)
        if existing_article:
            articles_to_return.append(existing_article)
            continue

        published_str = article.get("publishedAt")
        published_at = None
        if published_str:
            try:
                published_at = datetime.fromisoformat(published_str.replace("Z", "+00:00"))
            except ValueError:
                published_at = None

        new_article_data = schemas.NewsArticleSchema(
            id=0,  # dummy id; will be replaced after DB insert
            title=title,
            description=article.get("description"),
            url=article.get("url"),
            published_at=published_at
        )

        new_article = crud.create_article(db, new_article_data)
        articles_to_return.append(new_article)

    return articles_to_return
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # your React dev server URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
