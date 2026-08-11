import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 25,
    category: "Air Purifying Plants",
    description:
      "A beautiful and low-maintenance plant that is perfect for homes and offices.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    description:
      "A lovely indoor plant with elegant green leaves and beautiful flowers.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Jade Plant",
    price: 28,
    category: "Succulents",
    description:
      "A beautiful succulent with thick green leaves that is easy to maintain.",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Monstera",
    price: 35,
    category: "Tropical Plants",
    description:
      "A tropical plant with large decorative leaves that adds beauty to any room.",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Air Purifying Plants",
    description:
      "A hardy and attractive plant that is suitable for beginners.",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Tropical Plants",
    description:
      "A stylish plant with glossy leaves that makes an excellent indoor decoration.",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedProducts((previous) => [
      ...previous,
      product.id,
    ]);
  };

  const categories = [
    "Air Purifying Plants",
    "Succulents",
    "Tropical Plants",
  ];

  return (
    <section className="product-list">

      {/* Navbar */}
      <nav className="product-navbar">

        <div className="navbar-logo">
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <a href="#products">Plants</a>
          <a href="#cart">Cart</a>
          <a href="#about">About Us</a>
        </div>

      </nav>

      <div
        className="products-container"
        id="products"
      >

        <h2>Our Plants</h2>

        <p className="products-intro">
          Explore our beautiful collection of plants.
        </p>

        {categories.map((category) => {

          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <div
              className="category-section"
              key={category}
            >

              <h3 className="category-title">
                {category}
              </h3>

              <div className="products-grid">

                {categoryProducts.map((product) => {

                  const isAdded =
                    addedProducts.includes(product.id);

                  return (
                    <div
                      className="product-card"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />

                      <div className="product-info">

                        <h3>{product.name}</h3>

                        <p>
                          {product.description}
                        </p>

                        <div className="product-bottom">

                          <span className="product-price">
                            ${product.price}
                          </span>

                          <button
                            className="add-to-cart-btn"
                            onClick={() =>
                              handleAddToCart(product)
                            }
                            disabled={isAdded}
                          >
                            {isAdded
                              ? "Added to Cart"
                              : "Add to Cart"}
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default ProductList;