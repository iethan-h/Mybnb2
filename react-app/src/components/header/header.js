import React from 'react';
import {  NavLink } from 'react-router-dom';
import SearchBar from './searchBar';
import LogoutButton from '../auth/LogoutButton'
import ProfileButton from './profileButton';
import { useSelector } from 'react-redux';
import './searchBar.css'

const Header = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
    <header>
      <div className='logged_in_nav'>
            <div>
                <NavLink className='browse' to='/home'>
                  <div className="logo">Mybnb</div>
                </NavLink>
            </div>
            <SearchBar />
            <div> 
                <LogoutButton />
            </div>
            <div>
            <ProfileButton user={user}/>
            </div>
        
        </div>
    </header>
    </>
  );
}

export default Header;
