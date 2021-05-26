import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../countries/Countries.module.css'
import Pagination from '../pagination/Pagination'
import {Link} from 'react-router-dom'
import {fillFilterCountries} from '../../actions/index'

const AllCountries = ({countries}) => {

    const dispatch = useDispatch()
    useEffect(() => { dispatch(fillFilterCountries())}, [dispatch])
    const filterCountries = useSelector(state => state.filterCountries)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = filterCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    function nextPage(pageNumber) {
        setCurrentPage(pageNumber)
      }
    return (
        <div className={styles.countries}>
             {currentCountries.map(country => {
              return <li key={country.id} className={styles.card}>
              <Link to={`/countries/${country.id}`}>
              <img src={country.flag} alt={country.name} className={styles.flag}></img>
              <span>{country.name}</span> 
              </Link> 
              <p> {country.continent} </p>
          </li>
            })}
            <Pagination 
              countriesPerPage={countriesPerPage} 
              totalCountries={filterCountries.length} 
              nextPage={nextPage}> 
            </Pagination>
        </div>
    )
}

export default AllCountries
