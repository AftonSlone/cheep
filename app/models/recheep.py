from .db import db



from .db import db


class Recheeps(db.Model):
    __tablename__ = 'recheeps'

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, primary_key=True)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False, primary_key=True)


    def to_dict(self):
        return {
            'user_id': self.user_id,
            'cheep_id': self.cheep_id
            }
