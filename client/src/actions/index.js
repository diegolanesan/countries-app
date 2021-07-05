

export function getCountries() {
    return function (dispatch) {
        return fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_COUNTRIES", data: json})
        })
        .catch((error) => console.error(error))
    }
}

export function fillFilterCountries() {
    return function (dispatch) {
        return fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(json => {
            dispatch({type: "FILL_FILTER_COUNTRIES", data: json})
        })
        .catch((error) => console.error(error))
    }
}

export function getCountryById(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/countries/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_COUNTRY_BY_ID", data:json})
        })
        .catch((error) => console.error(error))
    }
}

export function getCountryByName(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/countries/search?name=${name}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({type: "GET_COUNTRY_BY_NAME", data:json})
        })
        .catch((error) => console.error(error))
    }
}


// HELPER FUNCTION 
export function createActivity(data) {
        return fetch("http://localhost:3001/activities/create", {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(response => response.json())
        .catch((error) => console.error(error))
}


export function sortCountries(countries, sort) {
  
    let sortCountries = countries.slice();
    return function(dispatch){
      if(sort === 'asc'){
        sortCountries.sort((a, b) => {
          if(a.name < b.name) return -1 
          if(a.name > b.name) return 1 
          return 0})
      }
      if(sort === 'desc'){
        sortCountries.sort((a, b) => {
          if(a.name > b.name) return -1
          if(a.name < b.name) return 1
          return 0})
      }

      if(sort === 'more_population'){
        sortCountries.sort((a, b) => b.population - a.population)
      }

      if(sort === 'less_population'){
        sortCountries.sort((a, b) => a.population - b.population)
      }
  
      dispatch({type: "ORDER_COUNTRIES", data: sortCountries})
    }
    
  }  

export function getActivities() {
    return function(dispatch) {
        return fetch("http://localhost:3001/activities")
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_ACTIVITIES", data:json})
        })
        .catch((error) => console.error(error))
    }
}

export function getContinents() {
    return function (dispatch) {
        return fetch("http://localhost:3001/countries/continents")
        .then(response => response.json())
        .then(json => {
            dispatch({type: "GET_CONTINENTS", data:json})
        })
        .catch((error) => console.error(error))
    } 
}

export function filterByContinent(continent, countries) {
    return function(dispatch){
        dispatch({type: "FILTER_BY_CONTINENT", data: {continent: continent, countries: countries}})
      }
}

export function filterByActivity(activity, countries) {
    return function(dispatch) {
        dispatch({type: "FILTER_BY_ACTIVITY", data: {activity: activity, countries: countries}})
    }
}