import React from "react";
import './ProductList.css';

export default function ProductItem(prop, addProduct) {
  // console.log("This is pr++++++++++++++++++++++++++++++++++oduct prop", prop);
  const categoryTag = prop?.item.category.split(' ').map(element => element.trim());
  // console.log(categoryTag);
  // console.log(prop?.item.title.split(' ').slice(0, 4).join(' '));
  return <div>
    <div class='card'>
      <div class='card-content'>
        <div class='top-bar'>
          <span>
            ${prop?.item.price}
          </span>
          <span class='float-right lnr lnr-heart'></span>
        </div>
        <div class='img'>
          <img
            src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg' />
        </div>
        <div class='cartbutton'>
          <span>
            <button className="add-to-cart" id="btn-alert" onClick={() => { prop.addProduct(prop.item); alert('Product Added!'); }}>ADD TO CART</button>
          </span>
          <span class='float-right lnr lnr-heart'></span>
        </div>
      </div>
      <div class='card-description'>
        <div class='title'>
          {prop?.item.title.slice(0, 25)}
        </div>
        <div class='cart'>
          <span class='lnr lnr-cart'></span>
        </div>
      </div>
      <div class='card-footer'>
        <div class='span'>
          {categoryTag[0]}
        </div>
        <div class='span'>
          {categoryTag[1]}
        </div>
      </div>
    </div>
  </div>;
}
