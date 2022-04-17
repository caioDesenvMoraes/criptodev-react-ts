import React, {useState, useCallback, useEffect, FormEvent} from "react";

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

import { apiDataForm } from "../../services/apiData"

import styles from "./Contact.module.css"

interface IData {
    name: string
    phone: string
    email: string
}

const Contact: React.FC = () => {
    const [data, setData] = useState<IData>(/*{} as IData*/)

    const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        apiDataForm.post("", data)
    }, [data])

    return(
        <>
            <NavBar/>
            <div className={ styles.containerContact }>
                <h1>Deixe seu contato</h1>
                estado: {data}
                <form onChange={ handleSubmit } className={ styles.form }>
                    <input 
                        type="text" 
                        className={ styles.item } 
                        name="name" 
                        id="name" 
                        placeholder="Informe seu nome"
                        // onChange={ e => setData({ ...data, name: e.target.value})}
                        />
                    <input 
                        type="text" 
                        className={ styles.item } 
                        name="phone" 
                        id="phone" 
                        placeholder="Informe seu telefone"
                        // onChange={ e => setData({ ...data, phone: e.target.value})}
                    />
                    <input 
                        type="text" 
                        className={ styles.item } 
                        name="email" 
                        id="email" 
                        placeholder="Informe seu e-mail"
                        // onChange={ e => setData({ ...data, name: e.target.value})}
                        />
                    <input type="submit" className={ styles.button } value="Enviar"/>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contact