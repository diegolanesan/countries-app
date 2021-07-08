import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createActivity, getCountries, sortCountries} from '../../actions/index'
import styles from './CreateActivity.module.css'


function CreateActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const countries = useSelector(state => state.countries)
    const difficulty = ["1", "2", "3", "4", "5"]
    const estaciones = ["Verano", "Otoño", "Invierno", "Primavera", "Todas"]

    function sortCountries(countries) {
        let sortCountries = countries.slice();
        sortCountries.sort((a, b) => {
          if(a.name < b.name) return -1 
          if(a.name > b.name) return 1 
          return 0})
          return sortCountries
      }
    
    const [input, setInput] = useState({
        name: "",
        difficulty: 1,
        duration: "",
        season: "Verano",
        countries: []
    })

    const handleChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }

    const handleOptions = function(e) {
        let value = Array.from(e.target.selectedOptions, option => {return option.value});
        setInput({
         ...input,
        countries: value
    });
    }

    const handleSubmit = function(e) {
        e.preventDefault()
        createActivity(input)
        history.push('/countries')
    }

    // Errores
    

    return ( 
        <div> 
            <form className={styles.form} onSubmit={handleSubmit}>
                
                <div className={styles.formGroup}>
                    <label className={styles.label}> Nombre </label>
                    <input className={styles.input} type="text" name="name" onChange={handleChange} value={input.name} placeholder="Nombre"></input>
                </div>
                <div className={styles.formGroup}> 
                    <label> Dificultad </label>
                    <select className={styles.select} name="difficulty" onChange={handleChange}> 
                        {difficulty.map((e) =>{
                        return (<option key={e} value={e}>{e}</option>)
                        }
                        )} 
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label> Duración </label>
                    <input className={styles.input} type="text" name="duration" onChange={handleChange} value={input.duration} placeholder="Duración"></input>
                </div>
                <div className={styles.formGroup}>
                    <label> Estación </label>
                    <select  className={styles.select} name="season" onChange={handleChange}> 
                        {estaciones.map((e) =>{
                        return (<option key={e} value={e}>{e}</option>)
                        }
                        )} 
                    </select>
                </div>
                 <div className={styles.formGroup}>
                    <label> Países </label>
                    <select className={styles.selectCountry} id="countries" name="countries" size="5" multiple onChange={handleOptions}> 
                        {sortCountries(countries).map((e) =>{
                        return (<option key={e.id} value={e.id}>{e.name}</option>)
                        }
                        )} 
                    </select>
                </div>

                <input className={styles.btn} type='submit'/>
            </form>
        </div>
    )
}

export default CreateActivity
