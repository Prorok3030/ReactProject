import React from "react";
import './mainPage.css'
import Navbar from "../../layout/NavBar";

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <div className ="container">
                <div className="main-content">
                    <h1>Планируй своё время эффективно</h1>
                    <h4>Спроектируй свой день с помощью нашего простого планировщика задач</h4>
                    <a className="btn-main" href="/todo">Начать сейчас</a>
                </div>
            </div>
        </div>

    )
}

export default MainPage