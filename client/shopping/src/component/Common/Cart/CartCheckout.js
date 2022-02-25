import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import { addToCartRequest } from "../../../store/Home/HomeAction";
import { CartItem, CartFooter, CartLowerPrice, CartEmpty, CartHeaderMobile } from "./CartItem";

const CartCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shopping = useSelector((state) => state?.shopping);
  const cartItem = {...shopping?.cart};
  const handleAddAction = (item) => {
    dispatch(addToCartRequest({ item, type: "add" }));
  };

  const handleCheckoutAction = () => {
    navigate("/products");
  };
  const handleRemoveAction = (item) => {
    dispatch(addToCartRequest({ item, type: "remove" }));
  };
  return (
    <>
      {cartItem?.items?.length > 0 ? (
        <div className="cart-mobile-view" style={{background:'#f0f0f0'}}>
          <CartHeaderMobile/>
          <CartItem
            cartItem={cartItem}
            handleAddAction={handleAddAction}
            handleRemoveAction={handleRemoveAction}
          />
          <CartLowerPrice />
          <CartFooter
            handleCheckoutAction={handleCheckoutAction}
            footerLabel={`Proceed To Checkout Total Rs ${cartItem?.totalPrice}`}
          />
        </div>
      ) : (
        <div>
          <CartHeaderMobile />
          <CartEmpty />
          <CartFooter
            handleCheckoutAction={handleCheckoutAction}
            footerLabel={`Start Shopping`}
          />
        </div>
      )}
    </>
  );
};

export default CartCheckout;
