import React from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import "./Cart.scss";
import { addToCartRequest } from "../../../store/Home/HomeAction";
import {
  CartItem,
  CartHeader,
  CartFooter,
  CartLowerPrice,
  CartEmpty,
} from "./CartItem";

const Cart = ({ cartItem, setIsCartShow }) => {
  const dispatch = useDispatch();

  const handleAddAction = (item) => {
    dispatch(addToCartRequest({ item, type: "add" }));
  };

  const handleCheckoutAction = () => {
    setIsCartShow(false);
  };
  const handleRemoveAction = (item) => {
    dispatch(addToCartRequest({ item, type: "remove" }));
  };
  return (
    <>
      {cartItem?.items?.length > 0 ? (
        <div>
          <CartHeader setIsCartShow={setIsCartShow} />
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
          <CartHeader setIsCartShow={setIsCartShow} />
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

Cart.propTypes = {
  list: PropTypes.array,
};

Cart.defalutprops = {
  list: [],
};

export default Cart;
