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
        <div className={styles.container}>
        <div className={styles.card}>
           
            <img src={country.flag} alt={country.name} className={styles.flag}></img>
            <h2>{country.name} ({country.id})</h2>
            <p> <span>Continente: </span> {country.continent} </p>
            <p> <span>Capital: </span>{country.capital} </p>
            <p> <span>Región: </span>{country.subregion} </p>
            <p> <span>Area: </span>{country.area} </p>
            <p> <span>Población: </span>{country.population} </p>
            
        </div>  
        <div className={styles.card}>
            <h3> Actividades disponibles </h3>
            <ul> {country.activities && country.activities.map(activity => {
                return <li key={activity.id}>
                    <p> <span> Nombre: </span> {activity.name} </p>
                    <p> <span> Dificultad </span> {activity.difficulty} </p>
                    <p> <span> Duración: </span> {activity.duration} </p>
                    <p> <span> Estación: </span> {activity.season} </p>
                </li>
            })}</ul>
        </div>
        </div>
    )
} 

export default CountryDetail 
