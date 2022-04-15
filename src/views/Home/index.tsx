import React, { useState, useEffect } from "react"

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

import { apiData } from "../../services/apiData"
import { IStore } from "../../Interfaces"

import Constants from "../../Constants"

// import styled from "./style"

const Home: React.FC = () => {
    const [ data, setData ] = useState<IStore[]>( [] )

    useEffect( () => {
        apiData.get("stores").then( res => {
            setData( res.data )
        })
    }, [])
    return (
        <>
            <NavBar/>
            <h1>Listando Lojas</h1>
            {data.map( (el, index) => (
                <>
                    <div key={ index }>
                        <h2>{ el.label }</h2>
                        <img src={ el.logo } alt={ el.label } width={ 300 } height={ "auto" }/>
                        <p>{ el.address.street }</p>
                        <p>{ el.address.city }</p>
                        <p>{ el.address.state }</p>
                    </div>
                </>
            ) )}
            <Footer/>
        </>
    )
}

export default Home