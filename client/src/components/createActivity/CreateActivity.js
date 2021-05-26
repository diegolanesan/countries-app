import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createActivity, getCountries} from '../../actions/index'
// import styles from './CreateActivity.module.css'


function CreateActivity() {
    const dispatch = useDispatch()
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span> Crea una actividad turística </span>
                <div>
                    <label> Nombre </label>
                    <input type="text" name="name" onChange={handleChange} value={input.name}></input>
                </div>
                <div>
                    <label> Dificulad </label>
                    <input type="text" name="difficulty" onChange={handleChange} value={input.difficulty}></input>
                </div>
                <div>
                    <label> Duración </label>
                    <input type="text" name="duration" onChange={handleChange} value={input.duration}></input>
                </div>
                <div>
                    <label> Estación </label>
                    <input type="text" name="season" onChange={handleChange} value={input.season}></input>
                </div>
                 <div>
                    <label> Países </label>
                    <select id="countries" name="countries" size="5" multiple onChange={handleOptions}> 
                        {countries.map((e) =>{
                        return (<option key={e.id} value={e.id}>{e.name}</option>)
                        }
                        )} 
                    </select>
                </div>

                <input type='submit'/>
            </form>
        </div>
    )
}

export default CreateActivity
