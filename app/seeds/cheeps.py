from app.models import db, Cheep
from faker import Faker

fake = Faker()
def random_cheeps(id):
    new_cheep = Cheep(user_id=id, content=fake.text())
    db.session.add(new_cheep)

# Adds a demo user, you can add other users here if you want
def seed_cheeps():

    for i in range(21):
        for _ in range(10):
            random_cheeps(i + 1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cheeps():
    db.session.execute('TRUNCATE cheeps RESTART IDENTITY CASCADE;')
    db.session.commit()
