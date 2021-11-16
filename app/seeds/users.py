from app.models import db, User
from faker import Faker

fake = Faker()
def random_users():
    new_user = User(username=fake.user_name(), name=fake.name(), email=fake.email(), password='password', profile_photo=fake.image_url())
    db.session.add(new_user)

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', name=fake.name(), email='demo@aa.io', password='password', profile_photo=fake.image_url())

    db.session.add(demo)

    for _ in range(20):
        random_users()

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
