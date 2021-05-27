import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createActivity, getCountries} from '../../actions/index'
import styles from './CreateActivity.module.css'


function CreateActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => dispatch(getCountries()), [dispatch])

    const countries = useSelector(state => state.countries) 
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
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

    return ( 
        <div> 
            <form className={styles.form} onSubmit={handleSubmit}>
                
                <div className="styles.formGroup">
                    <label className={styles.label}> Nombre </label>
                    <input className={styles.input} type="text" name="name" onChange={handleChange} value={input.name} placeholder="Nombre"></input>
                </div>
                <div className="styles.formGroup"> 
                    <label> Dificulad </label>
                    <input className={styles.input} type="text" name="difficulty" onChange={handleChange} value={input.difficulty} placeholder="1 a 5"></input>
                </div>
                <div className="styles.formGroup">
                    <label> Duración </label>
                    <input className={styles.input} type="text" name="duration" onChange={handleChange} value={input.duration} placeholder="Duración"></input>
                </div>
                <div className="styles.formGroup">
                    <label> Estación </label>
                    <input className={styles.input} type="text" name="season" onChange={handleChange} value={input.season} placeholder="Estación"></input>
                </div>
                 <div className="styles.formGroup">
                    <label> Países </label>
                    <select className={styles.select} id="countries" name="countries" size="5" multiple onChange={handleOptions}> 
                        {countries.map((e) =>{
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
