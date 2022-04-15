import React, { useState, useEffect } from "react"

import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"

import { apiData } from "../../services/apiData"
import { IBlockChainData } from "../../Interfaces"

import Constants from "../../Constants"

// import styled from "./style"

const Home: React.FC = () => {
    const [ data, setData ] = useState<IBlockChainData>( {} as IBlockChainData )

    useEffect( () => {
        apiData.get("stores", ).then( res => {
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <NavBar/>
            <h1>Home Page</h1>
            <Footer/>
        </>
    )
}

export default Home