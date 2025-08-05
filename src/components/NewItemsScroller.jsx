import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/cart/cartSlice"; // adjust path as needed
import "./NewItemsScroller.css";

function NewItemsScroller() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Duplicate products for seamless loop
  const doubleProducts = [...products, ...products];

  return (
    <div className="scroller-container">
      <h2 className="lightning-heading mb-4">New Products</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="scroller-track">
        {doubleProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="card-wrapper">
            <div className="shiny-border">
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">₹{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewItemsScroller;
