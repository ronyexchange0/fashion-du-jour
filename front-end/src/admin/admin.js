import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductPage from './pages/products-page/products-page.component';

import Navbar from './components/navbar/navbar.component';
import Dashboard from './pages/dashboard/dashboard.component';

import "./admin.scss";

const Admin = () => {
    return (
        <div className="admin">
            <Navbar/>
            <div className="content">
                <div className="container">
                    <Route exact path="/admin/home" component={Dashboard}/>
                    <Route exact path="/admin/products" component={ProductPage}/>
                </div>
            </div>
        </div>
    )
}

export default Admin
