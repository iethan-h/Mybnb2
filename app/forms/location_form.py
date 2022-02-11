from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Location

def location_exists(form, field):
    address = field.data
    user = Location.query.filter(Location.address == address).first()
    if user:
        raise ValidationError('Location is already being hosted.')

class LocationForm(FlaskForm):
    address = StringField('address', validators=[DataRequired(),location_exists])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
    price = StringField('price', validators=[DataRequired()])
