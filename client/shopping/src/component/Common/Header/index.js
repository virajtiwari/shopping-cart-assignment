import React from "react";
import { useSelector } from "react-redux";
import "./Header.scss";
import Navbar from "../../Navbar";
import { leftNavigation, rightNavigation } from "../../../utils/APP";
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector(state=>state?.shopping?.cart);
  
  return (
    <header className="header">
      <Link to='/'>
        <img
          src="/static/images/logo.png"
          className="App-logo"
          alt="logo"
          width={100}
        />
      </Link>
      
      <Navbar nav={leftNavigation} />
      <div className="right-nav">
        <div className="login">
          <Navbar nav={rightNavigation} />
        </div>

        <div className="cart">
          <div className="cart-icon">
            <img src="/static/images/cart.svg" alt="Cart Icon" />
          </div>
          <div className="cart-count">{cart?.totalCount} items</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
