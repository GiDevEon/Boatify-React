import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import logo_small from './../../../images/logo/logo_small.png';

function Header() {
    return (
        <div>
            <a href="/">
                <div className="navbar-logo">
                    <img src={logo_small} alt="logo" className="logo"/>
                </div>
            </a>
            <Searchbar className="searchbar"/>
        </div>
    )
}

export default Header;