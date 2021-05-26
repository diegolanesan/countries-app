import React from 'react'
//import styles from './NavBar.module.css'
import Logo from '../../resources/world.png'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <div>
            <Link exact to="/countries" >
                <img src={Logo} width="40" height="40" alt="logo"/>
            </Link>
        </div>
            <nav> 
                <ul>
                    <li>
                        <Link exact to="/countries" >Inicio</Link>
                        <Link to="/create">Crea una actividad turística </Link>
                    </li>
                 </ul>
            </nav>
        </div>
    )
}


export default NavBar
