import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../resources/world.png'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.containerLogo}>
            <Link exact to="/" >
                <img className={styles.logo} src={Logo} width="40" height="40" alt="logo"/>
            </Link>
            <h1 className={styles.brand}> Países </h1>
            </div>
            <nav> 
                <ul className={styles.menu}>
                    <Link className={styles.countries} exact to="/countries" >Países</Link>
                    <Link to="/create"> <button className={styles.create}> Crea una actividad turística </button> </Link> 
                 </ul>
            </nav>
        </div>
    ) 
}


export default NavBar
