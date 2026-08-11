import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app">

      {!showProductList ? (
        <>
          <section className="landing-page" id="home">
            <div className="overlay"></div>

            <div className="landing-content">
              <h1>Paradise Nursery</h1>

              <p>Bring Nature Into Your Home</p>

              <p className="intro-text">
                Discover beautiful indoor plants and create a fresh,
                peaceful and healthy environment in your home.
              </p>

              <button
                className="get-started-btn"
                onClick={() => setShowProductList(true)}
              >
                Get Started
              </button>
            </div>
          </section>

          <AboutUs />
        </>
      ) : (
        <>
          <ProductList />
          <Cart />
        </>
      )}

    </div>
  );
}

export default App;