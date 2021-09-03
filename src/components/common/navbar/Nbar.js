import React from 'react'; 
import {BrowserRouter, NavLink} from 'react-router-dom';
import logo_small from './../../../images/logo/logo_small.png';
import './Nbar.css';
import search from './../../../images/search.svg';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function Nbar() {
    return (
        <BrowserRouter>

        
        <nav class="navbar navbar-expand-lg navbar-light bg-primary" id="navbar">
            <div class="container-fluid">
                <NavLink class="navbar-brand" to="/"><img src={logo_small} alt=""/></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="col-md-5 mx-auto">
                        <div class="input-group">
                            <input class="form-control border-end-0 border rounded-pill" type="search" value="What boat are you longing for?" id="example-search-input"/>
                            <span class="input-group-append">
                                <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                    <img src={search} alt="searchlogo" />
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" to="/sell">Sell</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" to="/bookmarks">Bookmarks</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" Route path="/Underonek">Boats u/1k</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" to={{pathname: "https://stolenboats.info/"}}>Stolen Boats</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink class="dropdown-item" to="/">Action</NavLink>
                                <NavLink class="dropdown-item" to="/">Another action</NavLink>
                                <NavLink class="dropdown-item" to="/">Something else here</NavLink>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" to="/Blog">Blog</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link active" to="/LogIn">SignIn/LogIn</NavLink>
                        </li>
                    </ul>

                    <DropdownButton id="dropdown-basic-button" title="EN">
                        <Dropdown.Item href="#/action-1">IT</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">DE</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">FR</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">ES</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </nav>
        </BrowserRouter>
    );
};