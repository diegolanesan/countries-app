import styles from './Landing.module.css'
import React from 'react'
import {Link} from 'react-router-dom'


const Landing = () => {

    return (
        <div className={styles.background}>
            <div className={styles.text}>
                <h1 className={styles.title}>Países</h1>
                    <Link to='/countries'>
                    <button className={styles.start}> Ingresar </button>
                    </Link>
                    
          
            </div>
        </div>
    )
}

export default Landing
