// write product card here
//eslint-disable-next-line
import React from "react";
import ViewProductButton from "../components/button";
import image from "../assets/product.jpeg";
import "../components/product.css"; // Importing CSS file

const Productcard = () => {
  // Static Product Details
  const productImage = image; 
  const productName = "Awesome Gadget";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
