import React from "react";
import ProductList from "../components/product/ProductList";

export default function Home({ addProduct }) {
  console.log("Home typeof TELOT TELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", typeof addProduct)
  return (
    <div>
      <div style={{ maxWidth: "500px", margin: "auto", paddingTop: "120px", color: "#cacaca", fontSize: "10rem", letterSpacing: "-1rem", textAlign: 'center', borderTop: "5rem" }}>
        HOME
      </div>
      <ProductList addProduct={addProduct}></ProductList>
    </div>

  );
}
