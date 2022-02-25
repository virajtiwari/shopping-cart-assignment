import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";
import Navbar from "../../Navbar";
import { leftNavigation, rightNavigation } from "../../../utils/APP";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart";

const Header = () => {
  const navigate = useNavigate();
  const shopping = useSelector((state) => state?.shopping);
  const [isCartShow, setIsCartShow] = useState(false);

  const handleCartAction = (event) => {
    console.log("test");
    if(window.screen.width > 768) 
      setIsCartShow(!isCartShow);
    else navigate('/cart');
  };

  return (
    <header className="header">
      <Link to="/">
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

        <div className="cart" onClick={handleCartAction}>
          <div className="cart-icon">
            <img src="/static/images/cart.svg" alt="Cart Icon" />
          </div>
          <div className="cart-count">{shopping?.cart?.totalCount} items</div>
        </div>
        {isCartShow && (
          <div className="cart-item-checkout">
            <Cart setIsCartShow={setIsCartShow} cartItem={shopping?.cart}/>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
