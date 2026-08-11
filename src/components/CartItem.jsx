import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Get all cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity >= 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: newQuantity,
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  // Total cost of this individual item
  const itemTotal = item.price * item.quantity;

  // Total quantity of all items in cart
  const totalItems = cartItems.reduce(
    (total, cartItem) =>
      total + cartItem.quantity,
    0
  );

  // Total amount of the complete cart
  const totalCartAmount = cartItems.reduce(
    (total, cartItem) =>
      total +
      cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">

        <h3>{item.name}</h3>

        <p className="cart-item-category">
          Category: {item.category}
        </p>

        <p className="cart-item-price">
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">

          <button
            onClick={decreaseQuantity}
            disabled={item.quantity <= 1}
          >
            −
          </button>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />

          <button
            onClick={increaseQuantity}
          >
            +
          </button>

        </div>

        {/* Individual item total */}
        <p className="item-total">
          Item Total: ${itemTotal.toFixed(2)}
        </p>

        <button
          className="remove-item-btn"
          onClick={handleRemove}
        >
          Remove
        </button>

        {/* Overall cart information */}
        <div className="cart-total-info">

          <p>
            Total Items in Cart:{" "}
            <strong>{totalItems}</strong>
          </p>

          <p>
            Total Cart Amount:{" "}
            <strong>
              ${totalCartAmount.toFixed(2)}
            </strong>
          </p>

        </div>

      </div>

    </div>
  );
}

export default CartItem;