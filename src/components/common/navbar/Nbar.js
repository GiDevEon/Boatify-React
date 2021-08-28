import React from 'react'; 
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import logo_small from './../../../images/logo/logo_small.png';
import './Nbar.css';
import search from './../../../images/search.svg';


export default function Nbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src={logo_small} alt=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Sell</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Bookmarks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Boats u/1k</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Stolen Boats</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Blog</a>
                        </li>
                    </ul>

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

                    <li class="signin">
                        <a class="nav-link active" href="/">SignIn/LogIn</a>
                    </li>

                    <div class="language">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            EN
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">DE</a></li>
                            <li><a class="dropdown-item" href="/">FR</a></li>
                            <li><a class="dropdown-item" href="/">ES</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};


// const [toggleMenu, setToggleMenu] = useState(false) //fn for menu collapse
// const [screenWidth, setScreenWidth] = useState(window.innerWidth)

// const toggleNav = () => {

//     setToggleMenu(!toggleMenu)
// }

// useEffect(() => {
//     const changeWidth = () => {
//         setScreenWidth(window.innerWidth);
//     }

//     window.addEventListener('resize', changeWidth)
//     return () => {
//         window.removeEventListener('resize', changeWidth)
//     }
// }, [])


// <nav className="navbar">
//         {(toggleMenu || screenWidth > 500) && ( // if/else
//             <ul className="list">
//                 <li><span className="items">Sell</span></li>
//                 <li><span className="items">Bookmarks</span></li>
//                 <li><span className="items">Boats under 1k</span></li>
//                 <li><span className="items">Stolen</span></li>
//                 <li><span className="items">Blog</span></li>
//                 <li><span className="items">Services</span></li>
//                 <li><span className="items">LogIn/SignUp</span></li>
//                 <button className="btnTypo">Language</button>
//             </ul>
//         )}
//             <button onClick={toggleNav} className="btn">BTN</button> 
//         </nav>