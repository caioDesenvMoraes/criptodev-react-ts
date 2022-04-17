import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Err from "./views/Err"
import Home from "./views/Home"
import Contact from "./views/Contact"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"

const Router: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <Err/> }/>
                <Route path="/" element={ <Home/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="/signin" element={ <SignIn/>}/>
                <Route path="/signup" element={ <SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router