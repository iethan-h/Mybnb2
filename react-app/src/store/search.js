//constants
const LOAD = 'search/LOAD_SEARCH'


const loadSearchResults = (locations) => ({
    type: LOAD,
    locations
})

export const loadSearches = (city, state) => async (dispatch) => {
    const response = await fetch(`/api/search/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            city,
            state,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(loadSearchResults(data))
        return ["Found", data];
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return ["Error", data.errors];
        }
      } else {
        return["Error"]
      }
}

let initialState = {search: null};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allResults = {};

            for (let location of action.locations.locations) {
                allResults[location.id] = location
            }
            return {...allResults }
        default:
            return state;
    }
}

export default searchReducer;