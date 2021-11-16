from .db import db
import datetime


class CheepPhoto(db.Model):
    __tablename__ = 'cheep_photos'

    id = db.Column(db.Integer, primary_key=True)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    cheep = db.relationship("Cheep", backref="photos")
