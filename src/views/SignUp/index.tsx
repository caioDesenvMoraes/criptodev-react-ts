import React from "react"

import styles from "./SignUp.module.css"

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"


const SignUp: React.FC = () => {
    return(
        <>
            <NavBar/>
            <div className={ styles.container }>
                <h1>Inscreva-se</h1>
                <div className={ styles.card}>
                    <form onSubmit={ () => alert("test") }>
                        <input type="text" className={ styles.item } name="name" id="name" placeholder="Informe seu nome"/>
                        <input type="email" className={ styles.item } name="email" id="email" placeholder="Informe seu e-mail"/>
                        <input type="password" className={ styles.item } name="password" id="password" placeholder="Informe sua senha"/>
                        <input type="submit" className={ styles.button } value="Cadastrar" />
                    </form>
                </div>
            </div>
            <Footer/>
        </>    
    )
}

export default SignUp