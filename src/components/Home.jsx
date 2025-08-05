import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { addToCart } from "../features/cart/cartSlice";
import NewItemsScroller from "./NewItemsScroller";
import Hero from "./Hero";

function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data); // assuming your API sends an array of product objects
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <NewItemsScroller />

      {/* Product Section */}
      <div className="p-6 min-h-[300px]">
        <h1 className="text-3xl font-bold text-center pb-2 text-blue-600">
          Our Products
        </h1>
        <hr className="pb-2 text-blue-600" />
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Items"
              className="w-32 h-32 mb-6 opacity-70"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No Products Found
            </h2>
            <p className="text-gray-500 mb-4">
              We’re sorry, but there are currently no items available.
            </p>
            <a
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
            >
              Go Back to Home
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-contain rounded-xl mb-3"
                />
                <div className="pt-4">
                  <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
