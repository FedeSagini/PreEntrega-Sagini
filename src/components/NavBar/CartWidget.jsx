import React from "react";
import cart from '../assets/img/cart.png'

function CartWidget() {
  return (
    <div>
      <img className="cart" src={cart} alt="CART" />
      <span className="badge badge-light">3</span>
    </div>
  );
}

export default CartWidget;
