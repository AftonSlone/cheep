from .db import db



Recheeps = db.Table(
    "recheeps",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("cheep_id", db.Integer, db.ForeignKey("cheeps.id"), primary_key=True)
 )
