import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function Wishlist() {
  const wishlist = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();

  const totalItems = wishlist.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = wishlist.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-[60vh] px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-32 h-32 mb-4 opacity-80"
        />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 mb-4">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4 text-lg font-semibold">
        🛒 Total Items: {totalItems} | ₹{totalPrice}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-xl shadow-md max-w-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-[4/3] object-contain mb-3 rounded-md"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>

            <div className="flex justify-between mt-3 items-center">
              <span className="text-blue-600 font-bold">
                ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="bg-gray-200 px-2 rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-gray-200 px-2 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="mt-2 w-full bg-red-500 text-white py-1 rounded-md text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
