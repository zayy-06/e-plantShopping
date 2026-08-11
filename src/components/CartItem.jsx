import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleQuantityChange = (event) => {
    const quantity = Number(event.target.value);

    if (quantity >= 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity,
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

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
          {item.category}
        </p>

        <p className="cart-item-price">
          ${item.price}
        </p>

        <div className="quantity-controls">

          <button
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />

          <button onClick={handleIncrease}>
            +
          </button>

        </div>

        <p className="item-total">
          Total: ${(item.price * item.quantity).toFixed(2)}
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