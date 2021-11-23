from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
import datetime


class EditReplyForm(FlaskForm):
    content = StringField('content')
    updated_at = DateTimeField('updated_at', default=datetime.datetime.utcnow)
