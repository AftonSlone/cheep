from .db import db



from .db import db


class Recheeps(db.Model):
    __tablename__ = 'recheeps'

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, primary_key=True)
    cheep_id = db.Column(db.Integer, db.ForeignKey("cheeps.id"), nullable=False, primary_key=True)

    cheep = db.relationship("Cheep")


    def to_dict(self):
        return {
            'user_id': self.user_id,
            'cheep_id': self.cheep_id,
            'cheep': self.cheep.to_simple_dict()
            }

    def to_simple_dict(self):
        return {
            'user_id': self.user_id,
            'cheep_id': self.cheep_id,
        }
