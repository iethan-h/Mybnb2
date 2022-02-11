from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField

class SearchForm(FlaskForm):
    city = StringField("city")
    state = StringField("state")