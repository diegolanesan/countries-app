import React, { useEffect } from 'react'
import styles from './CountryDetail.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getCountryById} from '../../actions/index'


function CountryDetail(props) {
    const country = useSelector(state => state.country)
    const dispatch = useDispatch()
    const id = props.match.params.id
    useEffect(() => dispatch(getCountryById(id)), [dispatch])
    
    return (
        <div className={styles.card}>
           
            <img src={country.flag} alt={country.name} className={styles.flag}></img>
            <span>{country.name} ({country.id})</span>
            <p> {country.continent} </p>
            <p> {country.capital} </p>
            <p> {country.subregion} </p>
            <p> {country.area} </p>
            <p> {country.population} </p>
            <span> Actividades disponibles </span>
            
            <ul> {country.activities && country.activities.map(activity => {
                return <li key={activity.id}>
                    <span> {activity.name} </span>
                </li>
            })}</ul>
        </div>
    )
}

export default CountryDetail
