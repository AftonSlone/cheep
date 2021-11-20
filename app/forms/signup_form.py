from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email
from app.validators import signup_user_exists, username_exists





class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), Email(granular_message=True), signup_user_exists])
    password = StringField('password', validators=[DataRequired()])
