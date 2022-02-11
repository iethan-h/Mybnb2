import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import LocationCard from './locationCard'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {AllLocations} from '../../store/location'
import './index.css'

function LocationFeed()  {
    const dispatch=useDispatch();
    
    const locations = useSelector(state => Object.values(state.location))
    
    useEffect(()=>{
        dispatch(AllLocations())
    },[dispatch])
    
    return(
        <>
            <div>
                <NavLink className="loggedInNav" to='/home'>Home</NavLink>
            </div>
            <div className="locWelcome">
                <h1>Browse ALL of our locations</h1>
            </div>
                <hr/>
            <div className='feedWrapper'>
                {locations?.map((location)=>(
                    
                    <LocationCard key={location?.id} location={location}/> 
                                 
                ))}
            </div>
            </>
    )
}
export default LocationFeed