import React from 'react';
import {Link} from "react-router-dom";

import Input from '../input/input.component';

import "./footer.style.scss";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import pin from "../../assets/pin.svg";
import insta from "../../assets/insta.svg";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-line"></div>
                <div className="footer-inner row">
                    <div className="col-lg-4 left">
                        <Link to="/"><img className="d-inline-block" src={logo}/></Link>
                        <span className="d-inline-block">All Rights Reserved</span>
                    </div>

                    <div className="col-lg-4 middle">
                        <nav>
                            <ul>
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

                        <form>
                            <Input placeholder="YOUR EMAIL" type="email"/>
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>

                    <div className="col-lg-4 socials">
                        <Link to="#" className="insta social">
                            <img src={insta}/>
                        </Link>

                        <Link to="#" className="pin social">
                            <img src={pin}/>
                        </Link>

                        <Link to="#" className="fb social">
                            <img src={fb}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
