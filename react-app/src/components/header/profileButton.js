import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/searchContext';
import { login, logout } from '../../store/session';
import { signUp } from '../../store/session';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const {setShowSearch, setSearchCity, setSearchState} = useSearch();
    const onLogout = async (e) => {
        await dispatch(logout());
        setShowSearch(false)
        setSearchCity('')
        setSearchState('')
      };
    
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);
    return (
        <>
        <div className="profileButtonAndDropDown">
                <div className="profileButton" onClick={() => setShowMenu(!showMenu)}>
                    <div className="threeLines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {user ? (
                        <>
                        {user.profile_pic ? (
                            <div className="profileButtonUserIcon" style={{backgroundImage: `url(${user.profile_pic}), url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png)`}}></div>
                        ) : (
                            <div className="profileButtonUserIcon" style={{backgroundImage: 'url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png'}}></div>
                        )}
                        </>
                    ) : (
                        <div className="profileButtonUserIcon" style={{backgroundImage: `url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png)`}}></div>
                    )}
                </div>
                {showMenu && (
                    <div className="profileDropDown">
                        {user? (
                            <div className="loggedInProfileDropDown">
                                <Link to={`/bookings/${user?.id}`}>
                                    <div className="profileDropDownLinks">Your bookings</div>
                                </Link>
                                <Link to="/">
                                    <div className="profileDropDownLinks">Be a host</div>
                                </Link>
                                <div className="dropDownLine"></div>
                                <div className="logOutButton" onClick={onLogout}>Log out</div>
                            </div>
                        ) : (
                            <div className="loggedOutProfileDropDown">
                                <div>
                               <a className='options' href='/login' exact={true} activeClassName='active'>
                                    Login
                                </a>
                                </div>
                                <div>
                                <a className='options' href='/sign-up' exact={true} activeClassName='active'>
                                    Sign Up
                                </a>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
        </>
    )
}

export default ProfileButton