from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Length
from app.validators import signup_user_exists, signup_username_length, username_exists





class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), Length(min=4, max=15), username_exists])
    email = StringField('email', validators=[DataRequired(), Email(granular_message=True), signup_user_exists])
    password = StringField('password', validators=[DataRequired(), Length(min=6, max=20)])
