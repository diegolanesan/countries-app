import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../resources/world.png'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className={styles.header}>
            <div>
            <Link exact to="/countries" >
                <img className={styles.logo} src={Logo} width="40" height="40" alt="logo"/>
            </Link>
        </div>
            <nav> 
                <ul className={styles.menu}>
                    <Link  exact to="/countries" >Países</Link>
                    <Link to="/create">Crea una actividad turística </Link> 
                 </ul>
            </nav>
        </div>
    ) 
}


export default NavBar
