from flask import Blueprint, jsonify, request
from app.models import db, Location
from app.forms.search_form import SearchForm
from .auth_routes import validation_errors_to_error_messages



search_routes = Blueprint('search', __name__)

# Get search results
@search_routes.route('/', methods=['POST'])
def search_results():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    # Grab all the different filters
    filters = []
    if (data["city"]):
        filters.append(Location.city.ilike(f'%{data["city"]}%'))
    if (data["state"]):
        filters.append(Location.state == data["state"])


    # Pass all filters into a query
    locations = Location.query.filter(*filters)

    results = [location.to_dict() for location in locations]
    return {'locations': results}
