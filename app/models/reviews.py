from .db import db

class Review(db.Model):
    
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id', ondelete='CASCADE'), nullable=False)
    review = db.Column(db.String(500), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True))
    updatedAt = db.Column(db.DateTime(timezone=True))
    
    #relationships
    
    user = db.relationship('User', back_populates='reviews')
    locations = db.relationship('Location', back_populates='reviews')
    images = db.relationship('Image', back_populates='reviews')
    
    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'userId': self.userId,
            'review': self.review
        }