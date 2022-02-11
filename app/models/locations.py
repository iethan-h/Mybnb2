from sqlalchemy.orm import defaultload
from .db import db

class Location(db.Model):
    
    __tablename__ = "locations"
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    address = db.Column(db.String(250), nullable=False, unique=True)
    city = db.Column(db.String(250), nullable=False)
    state = db.Column(db.String(250), nullable=False)
    country = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(250), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True))
    updatedAt = db.Column(db.DateTime(timezone=True))
    
    
    #relationships
    user = db.relationship('User', back_populates='locations')
    reviews = db.relationship('Review', back_populates='locations', cascade="all, delete")
    booking = db.relationship('Booking', back_populates='locations', cascade="all, delete")
    images = db.relationship('Image', back_populates='locations')
    
    def to_dict(self):
        return {
             'id': self.id,
             'address': self.address,
             'city': self.city,
             'state': self.state,
             'country': self.country,
             'price': self.price,
             'userId': self.userId,
             'image': self.image,
             'review_id':[reviews.id for reviews in self.reviews],
             'createdAt': self.createdAt,
             'updatedAt': self.updatedAt
        }
        
    def booking_info(self):
        return {
             'id': self.id,
             'address': self.address,
             'city': self.city,
             'state': self.state,
             'price': self.price,
             'userId': self.userId,
             'image': self.image,
             'review_id':[reviews.id for reviews in self.reviews],
        }