from .db import db
import datetime


class Cheep(db.Model):
    __tablename__ = 'cheeps'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    user = db.relationship("User", back_populates="cheeps")
    photos = db.relationship("CheepPhoto", back_populates="cheep", cascade = 'all, delete')
    replies = db.relationship("Reply", back_populates="cheep", cascade = 'all, delete')
    likes = db.relationship("CheepLikes", cascade = 'all, delete')
    recheeps = db.relationship("Recheeps", cascade = 'all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.user.to_dict(),
            'photos': [photo.to_simple_dict() for photo in self.photos],
            'replies': [reply.to_dict() for reply in self.replies],
            'likes': [like.to_dict() for like in self.likes],
            'recheeps': [recheep.to_dict() for recheep in self.recheeps]
        }

    def to_simple_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
            'photos': [photo.to_simple_dict() for photo in self.photos],
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

    def update(self, content=None, updated_at=None, **kwargs):
        self.content = content if content else self.content
        self.updated_at = updated_at if updated_at else self.updated_at
        return self
