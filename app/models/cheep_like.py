from .db import db



cheep_likes = db.Table(
    "cheep_likes",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("cheep_id", db.Integer, db.ForeignKey("cheeps.id"), primary_key=True)
 )
