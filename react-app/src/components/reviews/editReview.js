import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {editReview} from '../../store/review'
import './reviews.css'




const ReviewEdit = ({reviewId,locationId,reviews}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState(reviews.review)  
    const [errors,setErrors] = useState([])
    
    
    const handleEdit = async (e) => {
    e.preventDefault();
    let error = [];
    if(review.length === 0 || review.length < 5){
        error.push("Please enter a story that is 5 or more characters.")
    }
    if(review.length > 250){
        error.push("Please enter a story that is less than 100 characters.")
    }
    if(error.length){
        setErrors(error)
        return
    }
    const payload ={
        userId,
        review,
        locationId
        }
        await dispatch(
        editReview(payload,reviewId)
        )
        window.location.reload(true);
    }
    
    return (
        <div className="formDiv">
            <form className="Form">
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>{error}</div>
            ))}
                <fieldset>
                    <legend>Change your review</legend>
                        <div>
                            <textarea
                             className="reviewField"
                             type="text" 
                             placeholder="Type here..." 
                             value={review}
                             onChange={(e) => setReview(e.target.value)}
                             />
                        </div>
                        
                        <div>
                            <button onClick={handleEdit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
    
    
}

export default ReviewEdit