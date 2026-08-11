import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

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

  // Total cost of this individual product
  const itemTotal = item.price * item.quantity;

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
          Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">

          <button
            onClick={decreaseQuantity}
            disabled={item.quantity <= 1}
            aria-label={`Decrease quantity of ${item.name}`}
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
            aria-label={`Increase quantity of ${item.name}`}
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

      </div>

    </div>
  );
}

export default CartItem;