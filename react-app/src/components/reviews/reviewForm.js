import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newReview} from '../../store/review'
import './reviews.css'





const ReviewForm = ({setShowModal,locationId}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    // const locationId = useSelector(state => Object.key(state.location));
    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([])
    const [review, setReview] = useState('')
    

        
        const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            userId,
            review,
            locationId
        }
         await dispatch(
            newReview(payload)
        )
        
    }
    
    return (
        <div className="formDiv">
            <form className="Form">
                <fieldset className="formDiv">
                    <legend>Write a new review</legend>
                        <div>
                            <textarea
                             type="text" 
                             placeholder="Type here..." 
                             value={review}
                             onChange={(e) => setReview(e.target.value)}
                             />
                        </div>
                        
                        <div className="submit_btn">
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
    
    
}

export default ReviewForm