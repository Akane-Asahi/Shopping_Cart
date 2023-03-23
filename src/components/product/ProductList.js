import React, { useState, useEffect } from "react";
import './ProductList.css';
import ProductItem from "./ProductItem.js";

export default function ProductList({ addProduct }) {

  console.log("Froooooooooooooom productList:", addProduct)
  const url = `https://fakestoreapi.com/products`;

  const [product, setProduct] = useState([]);

  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getData();
    console.log("before ", product);
  }, [])
  // console.log("Product", product);
  // console.log("Product", product[0]?.category);

  return (
    <div>
      <div style={{ margin: "auto", paddingTop: "120px", color: "#cacaca", fontSize: "10rem", letterSpacing: "-0.5rem", textAlign: 'center', borderTop: "5rem" }}>
        PRODUCTS
      </div>
      <div className="body">
        <div class='container'>
          {product.map((item) => {
            return <ProductItem item={item} key={item.id} addProduct={addProduct} />
          })}
        </div>
      </div>
    </div>
  );
}
