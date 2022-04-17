import React from "react"

import styles from "./SignIn.module.css" 

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

const SignIn: React.FC = () => {
    return(
        <>
            <NavBar/>
            <div className={ styles.container }>
                <h1>Logar-se</h1>
                <div className={ styles.card}>
                    <form onSubmit={ () => alert("test") }>
                        <input type="text" className={ styles.item } name="name" id="name" placeholder="Informe seu nome"/>
                        <input type="password" className={ styles.item } name="password" id="password" placeholder="Informe sua senha"/>
                        <input type="submit" className={ styles.button } value="Entrar" />
                    </form>
                </div>
            </div>
            <Footer/>
    </>   
    )
}

export default SignIn