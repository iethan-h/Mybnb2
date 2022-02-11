import React, {useEffect,useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newReview, AllReviews} from '../../store/review'




const ReviewForm = ({setShowModal,locationId}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [errors, setErrors] = useState([])


        
        const handleSubmit = async (e) => {
        e.preventDefault();
        let error = [];
        if(review.length === 0 || review.length < 5){
            error.push("Please enter a story that is 5 or more characters.")
        }
        if(review.length > 100){
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
            newReview(payload)
        )
        window.location.reload(true);
    }
    
    return (
        <div className="formDiv">
            <form className="Form">
            <div>
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>{error}</div>
            ))}
            </div>
           
                <fieldset> 
                    <div className="Form">
                    <h2>Write a new story!</h2>
                    </div>
                        <div>
                            <textarea
                             type="text" 
                             placeholder="Type here..." 
                             value={review}
                             onChange={(e) => setReview(e.target.value)}
                             />
                        </div>
                        
                        <div className="Form">
                            <button className="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                </fieldset>
                
            </form>   
        </div>
    )
    
    
}

export default ReviewForm