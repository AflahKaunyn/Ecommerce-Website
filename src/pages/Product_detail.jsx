import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product_detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?product_id=${id}`)
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Navbar />
      <center><h1>Product Details</h1></center>

    <div className="product-container">
        <div className="product">
        <img src={product.product_image} alt="" width="250" />
        <h2>{product.product_name}</h2>
        <h3>₹{product.product_price}</h3>
        <h4>{product.product_category}</h4>
        <h4>Description:</h4>
        <p>{product.product_description}</p>
      </div>
    </div>
    </>
  );
};

export default Product_detail;