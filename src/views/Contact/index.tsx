import React from "react";
import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

import styles from "./Contact.module.css"

const Contact: React.FC = () => {
    return(
        <>
            <NavBar/>
            <div className={ styles.containerContact}>
                <h1>Deixe seu contato</h1>
                <form className={ styles.form }>
                    <input type="text" className={ styles.item } name="name" id="name" placeholder="Informe seu nome"/>
                    <input type="number" className={ styles.item } name="telefone" id="telefone" placeholder="Informe seu telefone"/>
                    <input type="email" className={ styles.item } name="email" id="email" placeholder="Informe seu e-mail"/>
                    <input type="submit" className={ styles.button } value="Enviar"/>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contact