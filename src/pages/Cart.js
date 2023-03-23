import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './cart.css';

export default function Cart({ cartlist }) {
  console.log("cartlist: ", cartlist);
  console.log("{cartlist.length}", cartlist.length);

  const [cartNumber, setcartNumber] = useState(cartlist);
  console.log(cartNumber, "cartnuber");

  const addCartNumber = (product) => {
    setcartNumber(cartNumber.map(x => x.id === product.id ? { ...product, quantity: x.quantity + 1 } : x));
    cartlist = cartNumber;
  }
  const removeCartNumber = (product, index) => {
    if (product.quantity === 1) {
      alert('If you want to delete your product press "Remove"');
    } else {
      setcartNumber(cartNumber.map(x => x.id === product.id ? { ...product, quantity: (x.quantity - 1) } : x));
    }
  }
  const removeproduct = (product) => {
    setcartNumber(cartNumber.filter((x) => x.id !== product.id));

    // console.log("cartlist:::::::::: ", cartlist);
  }

  let total = 0;
  cartlist.map((item) => {
    total = total + parseFloat(item.price)
  });

  return (
    <div>

      {cartlist.length === 0 &&
        <div>
          <div style={{ margin: "auto", paddingTop: "120px", color: "#cacaca", fontSize: "10rem", letterSpacing: "-0.5rem", textAlign: 'center', borderTop: "5rem" }}>
            Cart
          </div>
          <div style={{ color: "#cacaca" }}>YOUR CART IS EMPTY!</div>
        </div>
      }

      {cartlist.length !== 0 &&
        <div style={{ paddingTop: "6rem" }}>
          <div class="cart-page">
            <div class="cart-page-container">
              {/* <!--For cart page--> */}
              <div class="cart-page-header">
                <div class="cart-header-notice">
                  <span class="cart-header-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <span class="cart-header-text red-text">Accounting Certificate</span>
                  <span class="cart-header-text">has been added to your cart</span>
                </div>
                <div class="cart-header-footer">
                  <a href="#" class="cart-header-cta" target="_blank"><Link className="continue" to="/">Continue Shopping</Link></a>
                </div>
              </div>
              {/* <!--For thank you page--> */}
              <div class="cart-page-header page-order-received">
                <div class="cart-header-notice">
                  <span class="cart-header-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <span class="cart-header-text">Thank you. Your order has been received.</span>
                </div>
                <div class="cart-order-received">
                  <div class="order-received-col">
                    <span class="">Order Number:</span>
                    <span class="bold-text">49143</span>
                  </div>
                  <div class="order-received-col received-col-mobile">
                    <span class="">Date</span>
                    <span class="bold-text">{new Date().toLocaleString().slice(0, 9)}</span>
                  </div>
                  <div class="order-received-col">
                    <span class="">Total:</span>
                    <span class="bold-text">${total}</span>
                  </div>
                  <div class="order-received-col">
                    <span class="">Payment Method:</span>
                    <span class="bold-text">Credit Card</span>
                  </div>
                </div>
              </div>
              {/* <!--For cart page and thank you page--> */}
              <div class="cart-page-table">
                <table class="cart-table-product">
                  <thead>
                    <tr class="cart-table-header">
                      <th class="cart-table-img">Provider</th>
                      <th class="cart-table-desktop cart-table-product-name">Product</th>
                      <th class="cart-table-desktop cart-table-payment">Quantity</th>
                      <th class="cart-table-desktop cart-table-size">Remove</th>
                      <th class="cart-table-size right-text-mobile">Amount</th>
                      <th class="cart-table-desktop cart-table-small-size"></th>
                    </tr>
                  </thead>
                  <tbody>

                    {cartNumber.map((item, index) => {
                      return (<tr class="cart-table-content">
                        <td class="cart-table-image-info"><img
                          src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg' /></td>
                        <td class="bold-text red-text cart-table-desktop">{item.title.slice(0, 27)}</td>
                        <td class="cart-table-desktop">
                          <button class="cart-header-counter" onClick={() => { removeCartNumber(item, index) }}>-</button>
                          <div href="#" class="cart-header-cta" target="_blank">{item.quantity}</div>
                          <button class="cart-header-counter" onClick={() => { addCartNumber(item) }}>+</button>
                        </td>
                        <td class="cart-table-desktop"><button class="cart-header-cta red-bg" onClick={() => { removeproduct(item) }}>Remove</button>
                        </td>
                        <td class="cart-table-desktop">${item.price * item.quantity}</td>
                        <td class="cart-table-icon red-text right-text-mobile"><i class="fa fa-close"></i></td>
                      </tr>)
                    }
                    )}

                    <tr class="cart-table-content cart-table-payment-content">
                      <td class="cart-table-payment-detail" colspan="6">
                        <div class="cart-table-plan-payment">
                          <div class="cart-plan-payment-container">
                            <table>
                              <tr>
                                <th class="cart-table-desktop cart-table-img"></th>
                                <th>Payment Plan Details</th>
                                <th class="cart-table-desktop"></th>
                                <th class="cart-table-desktop"></th>
                                <th class="cart-table-desktop"></th>
                              </tr>
                              <tr>
                                <td class="cart-table-desktop cart-table-image-info"></td>
                                <td><span class="bold-text">Deposit Today: </span>$49</td>
                                <td><span class="bold-text">Repayments of: </span>$49 x 32 Weeks</td>
                                <td><span class="bold-text">Starting on: </span>Thursday, 26 April 2018</td>
                                <td><span class="bold-text">Total Amount: </span>{total}</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>



                </table>


              </div>
              <div class="cart-block-right">
                <div class="cart-header-footer">
                  <a href="#" class="cart-header-cta red-bg" target="_blank">Proceed to Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }


    </div>);
}
