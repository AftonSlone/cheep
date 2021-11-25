import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL').replace('postgres://', 'postgresql://')
    SQLALCHEMY_ECHO = True
    S3_REGION = os.environ.get("AWS_BUCKET_REGION")
    S3_BUCKET = os.environ.get("AWS_BUCKET_NAME")
    S3_KEY = os.environ.get("AWS_ACCESS_KEY")
    S3_SECRET = os.environ.get("AWS_SECRET_KEY")
    S3_LOCATION = f"https://{S3_BUCKET}.s3.{S3_REGION}.amazonaws.com/"
