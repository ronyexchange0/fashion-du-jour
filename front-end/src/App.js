import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";
import ContactUs from "./pages/contact-us/contact-us.component";
import AboutPage from "./pages/about-page/about-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import RegisterPage from "./pages/register-page/register-page.component";
import CartPage from "./pages/cart-page/cart-page.component";
import ProductPage from "./pages/product-page/product-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import OrdersPage from "./pages/orders-page/orders-page.component";
import BlogPage from "./pages/blog-page/blog-page.component";
import PostPage from "./pages/post-page/post-page.component";
import ProfileEditPage from "./pages/profile-edit-page/profile-edit-page.component";
import Admin from "./admin/admin";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  const DefaultRoute = () => {
    return (
      <>
        <Navbar/>
        <Route path="/" component={Homepage} exact/>
        <Route path="/contact" component={ContactUs}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/shop/:cat?/:color?/:from?/:to?" component={ShopPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route path="/blog/:id" component={PostPage}/>
        <Route path="/cart/:id?" component={CartPage}/>
        <Route path="/product/:id" component={ProductPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route path="/profile/orders" component={OrdersPage}/>
        <Route path="/profile/edit" component={ProfileEditPage}/>
        <Footer/>
      </>
    )
  }
  return (
    <Router>
        <Switch>
          <Route path="/admin" component={Admin}/>
          <Route component={DefaultRoute}/>
        </Switch>
    </Router>
  );
}

export default App;
