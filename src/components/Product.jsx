import React from "react";

const Product = ({ img, title, subtitle }) => {
  return (
    <div className="product">
      <img src={img} alt="product-image" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Product;
