import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">

      {/* Landing Page */}
      <section className="landing-page">

        <div className="overlay"></div>

        <div className="landing-content">

          <h1>Paradise Nursery</h1>

          <p>
            Bring Nature Into Your Home
          </p>

          <p className="intro-text">
            Discover beautiful indoor plants and create a fresh,
            peaceful and healthy environment in your home.
          </p>

          <button
            className="get-started-btn"
            onClick={() => setStarted(true)}
          >
            Get Started
          </button>

          {started && (
            <p className="welcome-message">
              Welcome to Paradise Nursery! Explore our beautiful
              collection of plants.
            </p>
          )}

        </div>

      </section>

<AboutUs />
<ProductList />
<Cart />

    </div>
  );
}

export default App;