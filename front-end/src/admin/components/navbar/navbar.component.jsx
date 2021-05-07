import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.style.scss"
import adminLogo from "../../admin-assets/admin-logo.svg"
import dashboard from "../../admin-assets/dashboard.svg"

const Navbar = () => {
    return (
        <div className="nav-side">
            <div className="admin-navbar">
                <div className="container">
                    <nav>
                        <ul>
                            <li className="text-center">
                                <a href="/"><img src={adminLogo}/></a>
                            </li>

                            <li>
                                <Link to="/admin/home"><img src={dashboard}/><span>Dashboard</span></Link>
                            </li>

                            <li>
                                <Link to="/admin/products"><img src={dashboard}/><span>products</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
