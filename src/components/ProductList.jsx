import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
 {
  id: 1,
  name: "Jade Plant",
  price: 28,
  category: "Succulents",
  description:
    "A beautiful succulent plant with thick green leaves that is easy to maintain indoors.",
  image:
    "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80",
},
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Flowering Plants",
    description:
      "A lovely indoor plant with elegant white flowers and fresh green leaves.",
   image:
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    description:
      "A popular low-maintenance succulent known for its useful and attractive leaves.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    description:
      "A tropical plant with distinctive large leaves that adds beauty to any room.",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    description:
      "A hardy and attractive plant that is suitable for beginners.",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Decorative Plants",
    description:
      "A stylish plant with glossy leaves that makes an excellent indoor decoration.",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <section className="product-list">

      <div className="products-container">

        <h2>Our Plants</h2>

        <p className="products-intro">
          Explore our collection of beautiful plants and bring
          nature into your home.
        </p>

        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">

                  <span className="product-price">
                    ${product.price}
                  </span>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductList;