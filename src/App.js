import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import CartItem from './components/cart/CartItem';
import CartList from './components/cart/CartList';
import NavBar from './components/navbar/NavBar';
import ProductItem from './components/product/ProductItem';
import ProductList from './components/product/ProductList';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cartlist, setCartlist] = useState([]);

  const addProduct = (product) => {
    console.log("Add to caaaaaaaaaart:", product)


    let updatedcartArray = [...cartlist];
    console.log(updatedcartArray, "updatedcartArray")
    let productIndex = updatedcartArray.findIndex((item) => item.id === product.id);
    console.log(productIndex, "productIndex")

    if (productIndex !== -1) {
      cartlist[productIndex].quantity += 1
    } else {
      let updatedProduct = { ...product, quantity: 1 };
      setCartlist(cartlist => [...cartlist, updatedProduct]);
      console.log(product, "kijani hoise");
    }
  }

  console.log("caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaartlist", cartlist);
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path='' element={<Home addProduct={addProduct} />}></Route>
        <Route path='/cart' element={<Cart cartlist={cartlist} />}></Route>
        <Route path='/productlist' element={<ProductList />}></Route>
        <Route path='/productlist/:id' element={<ProductItem />}></Route>
      </Routes>

    </div>
  );
}

export default App;
