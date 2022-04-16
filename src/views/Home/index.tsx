import React, { useState, useEffect } from "react"

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

import { apiData } from "../../services/apiData"
import { IStore } from "../../Interfaces"

import styles from "./Home.module.css"

const Home: React.FC = () => {
    const [ data, setData ] = useState<IStore[]>( [] )
    const [ isLoad, setIsLoad ] = useState<boolean>( false )

    useEffect( () => {
        setIsLoad(true)
        apiData.get("stores").then( res => {
            setData( res.data )
        }).finally( () => setIsLoad(false))
    }, [])
    return (
        <>
            <NavBar/>
            <div className={ styles.container }>
                <h1>Listando Lojas</h1>
                { isLoad ? (
                    <>
                        <div>
                            <h3>Aguarde Carregando...</h3>
                        </div>
                    </>
                ) : (
                    <div className={ styles.cards }>
                        {data.map( (el, index) => (
                            <div className={ styles.storeLists }>
                                <div key={ index } className={ styles.card }>
                                    <h2>{ el.label }</h2>
                                    <img src={ el.logo } alt={ el.label } width={ 300 } height={ "auto" }/>
                                    <div className={ styles.address }>
                                        <p>{ el.address.street }</p>
                                        <p>{ el.address.city }</p>
                                        <p>{ el.address.state }</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
            <Footer/>
        </>
    )
}

export default Home