import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartSlice";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  const dispatch = useDispatch();

  const handletoAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>SHOP PAGE</h1>
      </div>
      <div className="products">
        <div className="card-wrapper">
          {data.map((product, i) => (
            <div className="cards">
              <img src={product.image} alt=" " />
              <div className="product-price">${product.price.toFixed(2)}</div>
              <div className="product-title">
                <p>{product.title}</p>
              </div>
              <button
                onClick={() => handletoAddToCart(product)}
                className="cartbutton"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
