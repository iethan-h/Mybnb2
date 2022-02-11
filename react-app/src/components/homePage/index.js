/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect} from 'react'
import LogoutButton from '../auth/LogoutButton'
import NewHostForm from '../newHost/newHostForm'
import { Modal } from '../../context/Modal';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './homepage.css'
import { useSearch } from '../../context/searchContext';


const Home = () =>{
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.session?.user)
    const {setShowSearch, setSearchCity, setSearchState} = useSearch();
    
    useEffect(() => {
        setShowSearch(false)
        setSearchCity('')
        setSearchState('')
    }, [setShowSearch, setSearchCity, setSearchState])

    return(
        <> 
            <div className="hostBtn">
            </div>
        <div className='homeBody'>
            <h1 className='greeter'>Find your next adventure with Mybnb!</h1>
        </div>
        
        <div className="homeImage">
            <div className="home_img_1">
                <img className='home_img1' src="https://www.lonestartravelguide.com/wp-content/uploads/2020/09/shutterstock_786767038-1024x681.jpg" alt=""/> 
                <NavLink className='centered' style={{color:"white",fontSize:"30px"}} to={`/bookings/${user?.id}`}>See your bookings</NavLink>
            </div>
            {/* <div className="home_img_2">
                <img className='home_img2' src='https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0' alt=""/>
            </div> */}
        </div>
        </>
    )
}

export default Home