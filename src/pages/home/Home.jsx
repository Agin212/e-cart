import React, { useEffect, useState } from "react";
import "./Home.css";
import banner1 from "./banner.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartSlice";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setAllProduct(response.data);
      console.log(allProduct);
    });
  }, []);

  return (
    <div className="hompage-container">
      <div className="banner">
        <img src={banner1} alt="" />
      </div>
      <div className="shopnow-title">
        <h1>SHOP NOW</h1>
      </div>
      <div className="products">
        <div className="card-wrapper">
          {allProduct.slice(0, 8).map((product, i) => (
            <div className="cards">
              <img src={product.image} alt=" " />
              <div className="product-price">${product.price}</div>
              <p>{product.title}</p>
              <button
                className="cartbutton"
                onClick={() => handleAddToCart(product)}
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

export default Home;
