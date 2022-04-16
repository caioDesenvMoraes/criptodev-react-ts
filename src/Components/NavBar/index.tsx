import React from "react";
import { Link } from "react-router-dom"
 
import Logo from "../../img/logo.jpg"
import styles from "./NavBar.module.css"

const NavBar: React.FC = () => {
    return(
        <header className={ styles.header }>
            <div className={ styles.containerHeader }>
                <img className={ styles.logo } src={ Logo } alt="Logotipo"/>
                <div className={ styles.itens }>
                    <Link to="/" className={ styles.item }>Home</Link>
                    <Link to="/contact" className={ styles.item }>Contact</Link>
                    <Link to="/signin" className={ styles.item }>Sign in</Link>
                    <Link to="/signup" className={ styles.item }>Sign up</Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar