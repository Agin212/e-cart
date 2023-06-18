import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="shop-title">
        <Link to="/">
          <h1>E-cart</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/shop">SHOP</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
