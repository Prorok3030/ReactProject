import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "../Home/Home"
import About from "../About/About";

const Nav = () => {
    return (
        <div>
           <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="todo" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </div>
    )
}

export default Nav