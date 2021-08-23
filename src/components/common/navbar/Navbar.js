import React, { useState, useEffect } from 'react';
import Searchbar from '../searchbar/Searchbar';
import logo_small from './../../../images/logo/logo_small.png';
import './Navbar.css';

function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false) //fn for menu collapse
const [screenWidth, setScreenWidth] = useState(window.innerWidth)

const toggleNav = () => {

    setToggleMenu(!toggleMenu)
}

useEffect(() => {
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
}, [])

    return (
        <nav className="navbar">
        {(toggleMenu || screenWidth > 500) && ( // if/else
            <ul className="list">
                <li><span className="items">Sell</span></li>
                <li><span className="items">Bookmarks</span></li>
                <li><span className="items">Boats under 1k</span></li>
                <li><span className="items">Stolen</span></li>
                <li><span className="items">Blog</span></li>
                <li><span className="items">Services</span></li>
                <li><span className="items">LogIn/SignUp</span></li>
                <button className="btnTypo">Language</button>
            </ul>
        )}
            <button onClick={toggleNav} className="btn">BTN</button> 
        </nav>
    )
}

export default Navbar;