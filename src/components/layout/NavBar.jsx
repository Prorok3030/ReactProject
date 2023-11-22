import React from 'react'
import './navBar.css'


const Navbar = () => {
    return(
        <nav>
            <div className="menu-item"><a href="/">Начало</a></div>
            <div className="menu-item"><a href="/todo">Планировщик</a></div>
            <div className="menu-item"><a href="/about">О нас</a></div>
        </nav>
    )
}

export default Navbar

