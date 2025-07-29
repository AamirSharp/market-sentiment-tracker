from sqlalchemy.orm import Session
from backend import models, schemas
from datetime import datetime

def get_article_by_title(db: Session, title: str):
    return db.query(models.NewsArticle).filter(models.NewsArticle.title == title).first()

def create_article(db: Session, article_data: schemas.NewsArticleSchema):
    db_article = models.NewsArticle(
        title=article_data.title,
        description=article_data.description,
        url=article_data.url,
        published_at=article_data.published_at or datetime.utcnow()
    )
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

def get_all_articles(db: Session):
    return db.query(models.NewsArticle).all()
