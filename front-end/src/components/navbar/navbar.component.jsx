import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.svg";
import bag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import "./navbar.style.scss";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="nav-bar">
                <Link to="/" className="logo">
                    <img src={logo}/>
                </Link>

                <nav className="navbar-nav">
                    <ul className="main-menu">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/shop">
                                Shop
                            </Link>
                        </li>

                        <li>
                            <Link to="/blog">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="user-icons">
                    <Link to="/register">
                        <img src={user}/>
                    </Link>

                    <div className="separator"></div>
                    
                    <Link to="/cart">
                        <img src={bag}/>
                    </Link>    
                </div>            
            </div>
        </div>
    )
}

export default Navbar
