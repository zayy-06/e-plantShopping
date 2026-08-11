import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">

      <div className="cart-container">

        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Add some beautiful plants!
          </p>
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

              <h3>
                Total: ${total.toFixed(2)}
              </h3>

              <button className="checkout-btn">
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