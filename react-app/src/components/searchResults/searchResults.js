import { useSelector } from 'react-redux';
import './searchResults'
import LocationCard from '../locations/locationCard'

function SearchDisplay() {

    const locations = useSelector(state => Object.values(state.search));

    //Scroll to the top of page
    document.documentElement.scrollTop = 0;

    return (
        <>
           
                <div className="yourlocationsContainer">
                    {locations?.length > 0 && locations[0] !== null && (
                        <div className="yourlocationsInfoAndMapContainer" id="searchResultHeader">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    {locations?.length === 1? (
                                        <h1>{`Search Results - 1 location`}</h1>
                                    ) : (
                                        <h1>{`Search Results - ${locations?.length} locations`}</h1>
                                    )}
                                </div>
                                <div className="feedWrapper">
                                    {locations?.map(location =>
                                        <LocationCard key={location?.id} location={location}/> 
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {locations.length === 0 &&  (
                        <div className="yourlocationsInfoAndMapContainer">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    <h1>No Search Results</h1>
                                </div>
                            </div>
                        </div>
                    )}
                    {locations[0] === null && (
                        <div className="yourlocationsInfoAndMapContainer">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    <h1>Enter a Search</h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
        </>
    )
}

export default SearchDisplay;
