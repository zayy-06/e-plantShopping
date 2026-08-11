import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section" id="cart">

      <div className="cart-container">

        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <p>Your cart is empty.</p>

            <p>
              Add some beautiful plants to your cart!
            </p>

          </div>

        ) : (

          <>
            <div className="cart-items">

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

            <div className="cart-summary">

              <p>
                Total Items: <strong>{totalItems}</strong>
              </p>

              <h3>
                Total Amount: ${totalAmount.toFixed(2)}
              </h3>

              <button
                className="checkout-btn"
                onClick={() =>
                  alert("Thank you for shopping with Paradise Nursery!")
                }
              >
                Checkout
              </button>

            </div>

          </>

        )}

      </div>

    </section>
  );
}

export default Cart;