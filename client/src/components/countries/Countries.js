import React from 'react'
import styles from './Countries.module.css'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCountries, getActivities, getContinents} from '../../actions/index'
import SearchBar from '../searchBar/SearchBar'
import Pagination from '../pagination/Pagination'; 
import AllCountries from '../allCountries/allCountries'


const Countries = (props) => {
    const dispatch = useDispatch() 
    useEffect(() => dispatch(getCountries()), [dispatch])
    useEffect(() => {dispatch(getContinents())}, [dispatch])
    useEffect(() => {dispatch(getActivities())}, [dispatch])

    const filter = useSelector(state => state.filter)
    const filterCountries = useSelector(state => state.filterCountries) 

    const [currentPage, setcurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = filterCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    function nextPage(pageNumber) {
      setcurrentPage(pageNumber)
    } 
    return (
        <div>
            <SearchBar />
            <ul className={styles.countries}>
            {filterCountries.length === 0 &&
              
              <AllCountries/>

            }
            
            {currentCountries.map((country) => {

              if(filter !== 'all' ){

                if(filter === country.continent) {
                  return <li key={country.id} className={styles.card}>
                    <Link to={`/countries/${country.id}`}>
                    <img src={country.flag} alt={country.name} className={styles.flag}></img>
                    <span>{country.name}</span> 
                    <p> {country.continent} </p>
                    </Link>
                  
                  </li>

                } else if (country.activities.find(activity => activity.name === filter)) {
                  
                  return <li key={country.id} className={styles.card}>
                    <Link to={`/countries/${country.id}`}>
                    <img src={country.flag} alt={country.name} className={styles.flag}></img>
                    <span>{country.name}</span> 
                    <p> {country.continent} </p>
                    </Link>
                    
                </li>

                }
              } else {
                
                return <li key={country.id} className={styles.card}>
                  <Link to={`/countries/${country.id}`}>
                  <img src={country.flag} alt={country.name} className={styles.flag}></img>
                  <span>{country.name}</span> 
                  <p> {country.continent} </p>
                  </Link>
                
                </li>
              }
            
            return <></>
            
          })}
            </ul>
            <Pagination 
              countriesPerPage={countriesPerPage} 
              totalCountries={filterCountries.length} 
              nextPage={nextPage}> 
            </Pagination>
        </div>
    )
}

export default Countries
