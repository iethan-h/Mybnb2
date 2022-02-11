import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Home from './components/homePage'
import Splash from './components/splashPage'
import LocationFeed from './components/locations'
import LoadLocation from './components/locationPage'
import UpdateLocation from './components/editLocation'
import Footer from './components/footer'
import BookingPage from './components/userBookings/userBookings'
import SearchProvider from './context/searchContext'; 
import SearchBar from './components/header/searchBar'
import SearchDisplay from './components/searchResults/searchResults';
import Header from './components/header/header'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <SearchProvider>
      <BrowserRouter>
      <div>
        <div className="mainContent">
          <Switch>
              <Route path='/' exact={true}>
                <NavBar />
                <Splash />          
              </Route>
              
              <Route path='/login' exact={true}>
                <LoginForm />
              </Route>
              
              <Route path='/sign-up' exact={true}>
                <SignUpForm />
              </Route>
              
              <ProtectedRoute path='/home' exact={true} >
              <Header />
                <Home />
              </ProtectedRoute>
              
              <Route path='/locations' exact={true}>
              <Header />
                <LocationFeed />
              </Route>
              
              <Route path='/locations/:locationId' exact={true}>
              <Header />
                <LoadLocation />
              </Route>
              
              <Route path='/locations/:locationId' exact={true}>
              <Header />
                <UpdateLocation />
              </Route>
              
              <Route path = '/bookings/:userId' exact={true}>
              <Header />
                <BookingPage/>
              </Route>  
              
              <Route exact path='/search' >
              <Header />
                    <SearchDisplay />
                  </Route>
            
            </Switch>
          </div>
        <Footer/>
        </div>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
