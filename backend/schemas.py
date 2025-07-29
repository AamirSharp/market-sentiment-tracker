from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class NewsArticleSchema(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    url: Optional[str] = None
    published_at: Optional[datetime] = None

    class Config:
        orm_mode = True  # allows compatibility with SQLAlchemy models
