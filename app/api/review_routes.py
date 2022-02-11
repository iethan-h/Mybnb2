from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Review
from app.forms.review_form import review_exists,ReviewForm,EditReviewForm


review_routes = Blueprint('reviews', __name__)

@review_routes.route("")

def home():
    return {review.id: review.to_dict() for review in Review.query.all()}

@review_routes.route('',methods=['POST'])

def reviews():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(**request.json)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return form.errors

@review_routes.route('',methods=['GET'])
def all_reviews():
    form = ReviewForm()
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}

@review_routes.route('/<int:id>')
def review(id):
    review = Review.query.get(id)
    return review.to_dict()
    
@review_routes.route('/<int:id>', methods=['PUT'])
def editReview(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_edit= Review.query.get(id)
        review_edit.review = form.data["review"]
        db.session.commit()
        return review_edit.to_dict()
    else:
        return form.errors
        
@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()