import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {items.length > 0 ? (
        <>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice}</p>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item))}>
                +
              </button>
              <button onClick={() => dispatch(decrementQuantity(item))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Delete
              </button>
            </div>
          ))}
          <button>Checkout</button>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products">
            <button>Go to Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
