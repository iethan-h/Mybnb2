import React from 'react';
import { login } from '../store/session';
import { useSelector, useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const demoLogin = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
};

  return (
    <div className='nav'>
      <ul className='nav_options'>
        {/* <li>
          <a className='options' href='/' exact={true} activeClassName='active'>
            Home
          </a>
        </li> */}
        <li>
          <a className='options' href='/login' exact={true} activeClassName='active'>
            Login
          </a>
        </li>
        <li>
          <a className='options' href='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
