import React, { useState} from "react";
import { useDispatch} from "react-redux";
import {editOneLocation} from '../../store/location'


const EditLocation = ({locationId, locationInfo}) => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(locationInfo.price)
    const [errors,setErrors]= useState([])

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const regex = /\d/;
        let error = [];
        if(regex.test(price) === false || price.length === 0 ){
            error.push("Please enter a price for your hosting.")
        }
        if(error.length){
            setErrors(error)
            return
        }
        const {address, city, state, image, country} = locationInfo
        const payload = {
            address, 
            city, 
            state,
            country, 
            image,
            price
        }
         dispatch(
            editOneLocation(payload,locationId)
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
                    <legend>Edit your location price</legend>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Price per day"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />                         
                        </div>
                        <div>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
    
}
export default EditLocation