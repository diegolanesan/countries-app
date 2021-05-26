
const initialState = {
    countries: [],
    activities: [],
    country: {},
    continents: [],
    filterCountries: [],
    filter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.data
            }

        case "FILL_FILTER_COUNTRIES":
            return {
                ...state,
                filterCountries: action.data
            }
        
        case "GET_COUNTRY_BY_ID":
            return {
                ...state,
                country: action.data
            }

        case "GET_COUNTRY_BY_NAME":
            return {
                ...state,
                filterCountries: action.data,
            }

        case "ORDER_COUNTRIES":
            return {
                ...state,
                filterCountries: action.data,
            }

        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.data,
            }
            
        case "GET_CONTINENTS":
            return {
                ...state,
                continents: action.data,
            }
            
        case "FILTER_BY_CONTINENT":
            return {
                ...state,
                filter: action.data.continent,
                filterCountries: action.data.countries.filter(country => country.continent === action.data.continent)
            }

        case "FILTER_BY_ACTIVITY":
            return {
                ...state,
                filter: action.data.activity,
                filterCountries: action.data.countries.filter(country => country.activities.name === action.data.activity),
            }
        default:
            return state      
    }
}

export default reducer