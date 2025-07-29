from sqlalchemy import Column, Integer, String, DateTime
from backend.database import Base  # use absolute import with backend.
from datetime import datetime

class NewsArticle(Base):
    __tablename__ = "news_articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True, nullable=False)
    description = Column(String, nullable=True)
    url = Column(String, nullable=True)
    published_at = Column(DateTime, default=datetime.utcnow)
