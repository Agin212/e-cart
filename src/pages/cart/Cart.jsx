import React, { useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  decreaseCart,
  increaseCart,
  getTotals,
} from "../../cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveCartItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <div className="cartTitle">
        <h1>CART PAGE</h1>
      </div>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
        </div>
      ) : (
        <div className="productItem-container">
          <div className="titles">
            <h3 className="product-title">Products</h3>
            <h3 className="price">Prices</h3>
            <h3 className="quantity"> Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div className="cart-product-name">
                    <h3 style={{ width: "100px" }}>{cartItem.title}</h3>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveCartItem(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleclearCart()}>
              clear cart
            </button>
            <div className="cart-checkout">
              <div className="sub-total">
                <span>subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at chekout</p>
              <Link to="/checkout">
                <button className="chekout-button">check out</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
