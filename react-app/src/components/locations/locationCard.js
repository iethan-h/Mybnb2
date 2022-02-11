import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleLocation } from '../../store/location'
import { useHistory } from 'react-router-dom'
import { deleteLocation } from '../../store/location'
import { AllLocations } from '../../store/location'
import { NavLink } from 'react-router-dom';
import './index.css'



const LocationCard = ({location}) => {
    // const { locationId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)

    useEffect(() => {
        dispatch(AllLocations())
    }, [dispatch])
    
    return (
        <>
            <NavLink to={`/locations/${location?.id}`} className="one_location_li">
                <div className='one_location' >
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
                
                    {location?.userId === userId ?
                    <p className="ownerNotif" style={{color: "red",display: "flex", justifyContent: "center"}}> Your location</p> :
                    null}
                </div>
                
            </NavLink>
        </>
    )
}

export default LocationCard