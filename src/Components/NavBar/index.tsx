import React from "react";
import { Link } from "react-router-dom"
 
import Logo from "../../img/logo.jpg"
// import styled from "./style"

const NavBar: React.FC = () => {
    return(
        <header>
            <div>
                <img src={ Logo } alt="Logotipo"/>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default NavBar