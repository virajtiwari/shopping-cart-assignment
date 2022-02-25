import React from "react";
import Button from "../../Button";

export const CartItem = ({ cartItem, handleAddAction, handleRemoveAction }) => {
  return (
    <>
      {cartItem?.items?.map((item) => (
        <div className="cart-item" key={item?.id}>
          <div>
            <img src={item?.imageURL} alt={item?.name} width={100} />
          </div>
          <div style={{ padding: "15px 5px" }}>
            <div>
              <h3>{item?.name}</h3>
            </div>
            <div className="buttons">
              <Button
                variant="conatined"
                disabled={item?.quantity === 0}
                handleClickHandler={() => handleRemoveAction(item)}
              >
                -
              </Button>
              <p>{item?.quantity}</p>

              <Button
                variant="contained"
                handleClickHandler={() => handleAddAction(item)}
              >
                +
              </Button>
              <p>
                {" "}
                <span style={{ marginRight: "1rem" }}>X</span> Rs {item?.price}
              </p>
            </div>
          </div>
          <div className="price">
            <p>Rs {item?.quantity * item?.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export const CartHeader = ({ setIsCartShow }) => {
  return (
    <div className="cart-header">
      <label>My Cart</label>
      <span onClick={() => setIsCartShow(false)}>X</span>
    </div>
  );
};

export const CartHeaderMobile = () => {
    return (
      <div className="cart-header-mobile">
        <h3>My Cart</h3>
      </div>
    );
  };

export const CartLowerPrice = () => {
  return (
    <div className="lower-price">
      <div>
        <img
          src="/static/images/lowest-price.png"
          alt="Lowest Price Logo"
          width={100}
        />
      </div>
      <div>You won't find cheaper anywhere.</div>
    </div>
  );
};

export const CartFooter = ({ handleCheckoutAction, footerLabel }) => {
  return (
    <div className="proceed">
      <Button variant="contained" handleClickHandler={handleCheckoutAction}>
        {" "}
        {footerLabel}
      </Button>
    </div>
  );
};

export const CartEmpty = () => {
  return (
    <div className="empty">
      <h2>No Items in your Cart</h2>
      <h4>Your Favourite Items are just a click away.</h4>
    </div>
  );
};
