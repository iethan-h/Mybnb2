/* eslint-disable no-unused-vars */
import {NavLink} from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {deleteLocation,AllLocations} from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import ReviewCard from '../reviews/reviewCard'
import {AllReviews} from '../../store/review'
import { Modal } from '../../context/Modal';
import ReviewForm from '../reviews/newReview'
import './locationPage.css'
import UpdateLocation from '../editLocation'
import BookingForm from '../bookings/booking_form'


function LoadLocation()  {
    const [showModal, setShowModal] = useState(false);
    const dispatch=useDispatch();
    const history = useHistory();
    const {locationId} = useParams()
    const user = useSelector((state) => state.session?.user)
    const locationOne = useSelector(state => state.location)
    const location = locationOne[locationId]
    const review =  useSelector(state => state.review)
    const [showCalendar, setShowCalendar] = useState(false)
    const reviews = useSelector(state =>Object.values(state.review))
    const { reviewId } = useParams();
    
    useEffect(()=>{
        dispatch(AllReviews(reviewId))
    },[dispatch,reviewId])
    
    useEffect(()=>{
        dispatch(AllLocations(locationId))
    },[dispatch, locationId])
    
    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteLocation(location.id))
        history.push('/home')
    }
    

    

    // let alreadyReviewed = false;
    let reviewCards;
    if (reviews){
        reviewCards = Object.values(reviews).map((review,idx) => {          
            if (location?.review_id?.includes(review.id)) {
                return <ReviewCard key={review?.id} review={review} locationId={locationId} />
            }
            // if (!alreadyReviewed && reviews[idx].userId === user?.id) {
            //     alreadyReviewed = true;             
            //   }
            return reviewCards
            
            
        })
        .reverse().slice()
    }
    
    //Disable already booked dates.
    



    return(
        <div>
                <div className="locationInfo">
                <div className="locationImage">
                        <img className="locationImg" src={location?.image} alt=""/>
                    </div>
                    <div className="locationAddress">
                        <p className="one_location_li">{location?.address}</p>
                    </div>
                    <div className="locationCity">
                        <p className="one_location_li">{location?.city}</p>
                    </div>
                    <div className="locationState">
                        <p className="one_location_li">{location?.state}</p>
                    </div>
                    <div className="locationCountry">
                        <p className="one_location_li">{location?.country}</p>
                    </div>
                    <div className="locationPrice">
                        <p className="one_location_li">${location?.price} per night</p>
                    </div>
                    
                    {location?.userId === user?.id ?
                        <>
                            <div className="locationOptions">                       
                                    <button className="deleteLocation" type="button"  onClick={handleDelete}>Delete Location</button>
                                    <UpdateLocation locationId={location}/>                              
                            </div>          
                        </>:
                                <BookingForm  locationId={location}/>
                        }  
                        <hr />
                    </div>
                    <div className='options'>
                        <div>
                        {/* {alreadyReviewed && location?.userId !== user?.id ? (
                            <div>
                                <button className='newStory' onClick={() => setShowModal(true)}>Write a new story</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                                    </Modal>
                                )}
                            </div>
                        ):null } */}
                            {location?.userId === user?.id && (
                            <>
                            
                            </>
                        )}
                        <div>
                        {location?.userId === user?.id ? (
                            <>
                            
                            </>
                        ):
                        <div>
                                <button className='newStory' onClick={() => setShowModal(true)}>Write a new story</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                                    </Modal>
                                )}
                                </div>
                            
                                }
</div>


                            </div>
                            <div className='userStories'>
                                <h2 className="reviewGreeting" >Read stories from visitors</h2>
                            </div>
           
                    </div>      
                        <div className='reviews'>
                            <div className='reviewCards'>
                                {reviewCards}
                            </div>
                        </div>
                    </div>

    )
}
export default LoadLocation