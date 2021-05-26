import React from 'react'
// import styles from './SearchBar.module.css'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountryByName, sortCountries, filterByContinent, filterByActivity} from '../../actions/index'


function SearchBar(props) {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const continents = useSelector(state => state.continents)
    const activities = useSelector(state => state.activities)
    const filterCountries = useSelector(state => state.filterCountries)
    const [name, setname] = useState("")
  

    function handleChange(e) {
        const nameInput = e.target.value
        setname(nameInput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getCountryByName(name))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                    <input type="submit"/> 
            </form>
            <div>
            <button onClick ={()=>dispatch(sortCountries(filterCountries, 'asc'))}>A a Z</button>
            <button onClick ={()=>dispatch(sortCountries(filterCountries, 'desc'))}>Z a A</button>
            </div>
            <div>
            <button onClick ={()=>dispatch(sortCountries(filterCountries, 'more_population'))}> Mayor población</button>
            <button onClick ={()=>dispatch(sortCountries(filterCountries, 'less_population'))}> Menor población</button>
            </div>

            <div>
                <span>Continente: </span>
                <select onChange={(e)=> dispatch(filterByContinent(e.target.value, countries))}>
                        <option value = {'all'}>todos</option>
                            {continents.map((continent) =>{
                            return (<option key={continent} value={continent}>{continent}</option>)
                            })}
                </select>
            </div>

            <div>
                <span>Actividad: </span>
                <select onChange={(e)=> dispatch(filterByActivity(e.target.value, countries))}>
                        <option value = {'all'}>todas</option>
                            {activities.map((activity) =>{
                            return (<option key={activity.id} value={activity.name}>{activity.name}</option>)
                            })}
                </select>
            </div>
        </div>
    )
}

export default SearchBar
