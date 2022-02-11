import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useSearch } from '../../context/searchContext';
import { loadSearches } from '../../store/search';

import './searchBar.css'


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {showSearch, setShowSearch,
        searchCity, setSearchCity,
        searchState, setSearchState} = useSearch();


    const showRealSearch = () => {
       setShowSearch(true)
    }


    const handleSearch = async (e) => {
        e.preventDefault()
        await dispatch(loadSearches(searchCity, searchState))
        history.push('/search')
    }


    return (
        <div className="searchBarContainer">
            {!showSearch && (
                <div className="fakeSearchBar" id="searchBar" onClick={showRealSearch}>
                    <div className="searchCategories">
                        <div>City</div>
                        <div>State</div>
                    </div>
                    <div className="searchMagGlassIcon">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            )}
            {showSearch && (
                <div className="realSearchBar">
                    <form className="realSearchFormContainer" onSubmit={handleSearch}>
                        <div className="searchFormField">
                            <label>City</label>
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="City"
                                maxLength="50"
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                            />
                        </div>
                         <div className="searchFormField">
                            <label>State</label>
                            <select value={searchState} onChange={(e) => setSearchState(e.target.value)}>
                                <option value="" disabled defaultValue>What state?</option>
                                <option value="">-</option>
                                <option value="Ak">Alabama</option>
                                <option value="Ak">Alaska</option>
                                <option value="Az">Arizona</option>
                                <option value="Ar">Arkansas</option>
                                <option value="Ca">California</option>
                                <option value="Co">Colorado</option>
                                <option value="Ct">Connecticut</option>
                                <option value="De">Delaware</option>
                                <option value="Dc">District Of Columbia</option>
                                <option value="Fl">Florida</option>
                                <option value="Ga">Georgia</option>
                                <option value="Hi">Hawaii</option>
                                <option value="Id">Idaho</option>
                                <option value="Il">Illinois</option>
                                <option value="In">Indiana</option>
                                <option value="Ia">Iowa</option>
                                <option value="Ks">Kansas</option>
                                <option value="Ky">Kentucky</option>
                                <option value="La">Louisiana</option>
                                <option value="Me">Maine</option>
                                <option value="Md">Maryland</option>
                                <option value="Ma">Massachusetts</option>
                                <option value="Mi">Michigan</option>
                                <option value="Mn">Minnesota</option>
                                <option value="Ms">Mississippi</option>
                                <option value="Mo">Missouri</option>
                                <option value="Mt">Montana</option>
                                <option value="Ne">Nebraska</option>
                                <option value="Nv">Nevada</option>
                                <option value="Nh">New Hampshire</option>
                                <option value="Nj">New Jersey</option>
                                <option value="Nm">New Mexico</option>
                                <option value="Ny">New York</option>
                                <option value="Nc">North Carolina</option>
                                <option value="Nd">North Dakota</option>
                                <option value="Oh">Ohio</option>
                                <option value="Ok">Oklahoma</option>
                                <option value="Or">Oregon</option>
                                <option value="Pa">Pennsylvania</option>
                                <option value="Ri">Rhode Island</option>
                                <option value="Sc">South Carolina</option>
                                <option value="Sd">South Dakota</option>
                                <option value="Tn">Tennessee</option>
                                <option value="Tx">Texas</option>
                                <option value="Ut">Utah</option>
                                <option value="Vt">Vermont</option>
                                <option value="Va">Virginia</option>
                                <option value="Wa">Washington</option>
                                <option value="Wv">West Virginia</option>
                                <option value="Wi">Wisconsin</option>
                                <option value="Wy">Wyoming</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="realSearchButtonContainer">
                            <div>Search</div>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
