import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


export default function NavBar() {
  return <div className="header">
    <div className='title'>
      <Link to="/"><button>Home</button></Link>
      {/* <Link to="/productlist"><button>Products</button></Link> */}
      <Link to="/cart"><button>Cart</button></Link>
    </div>
  </div>
}
