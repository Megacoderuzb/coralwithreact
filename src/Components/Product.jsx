import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Product = ({ product }) => {
  // console.log(product.id);
  return (
    <>
      {/* <div>
        <img src={product.image} width="100%" alt="" />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>Rating: {product.rating.rate}</p>
      </div> */}
      <div className="col-12 col-md-3 my-4 product">
        <div className="card w-100 h-100">
          <img
            src={product.image}
            width="100%"
            alt={product.title}
            className="card-img-top px-3 py-2"
          />
          <div className="card-body bg-dark">
            <div className="d-flex justify-content-between ">
              <div className="stars">
                <i className="fa-solid fa-star text-warning"></i>
                <span className="text-light">
                  {product.rating.rate}|| 💲{product.rating.count}
                </span>
              </div>
              <Link to={`/${product.id}`}>More</Link>
              <span className="text-light">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
