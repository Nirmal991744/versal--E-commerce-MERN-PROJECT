import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineLogin,
} from "react-icons/ai";

function Header() {
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const currentUser = useSelector((state) => state.user.currentUser); // ✅ updated
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalWishlistCount = wishlistItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 transition-all duration-300 ${
        scrolled ? "bg-blue-700 shadow-md" : "bg-blue-600"
      } text-white`}
    >
      <div className="text-xl font-semibold">🛒 E-Commerce</div>

      <form
        onSubmit={handleSearch}
        className="w-full md:w-1/2 flex justify-center"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </form>

      <ul className="flex gap-5 items-center justify-center text-sm md:text-base">
        <li>
          <Link to="/" className="hover:underline flex items-center gap-1">
            <AiFillHome className="text-lg" />
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/additems"
            className="hover:underline flex items-center gap-1"
          >
            <AiOutlinePlusCircle className="text-lg" />
            AddItems
          </Link>
        </li>

        <li className="relative">
          <Link to="/cart" className="hover:underline flex items-center gap-1">
            <AiOutlineShoppingCart className="text-lg" />
            Cart
            {totalWishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalWishlistCount}
              </span>
            )}
          </Link>
        </li>

        {/* ✅ Show Profile if Logged In */}
        <li>
          {currentUser ? (
            <Link
              to="/profile"
              className="hover:underline flex items-center gap-1"
            >
              👤 {currentUser.name}
            </Link>
          ) : (
            <Link
              to="/signin"
              className="hover:underline flex items-center gap-1"
            >
              <AiOutlineLogin className="text-lg" />
              Signin/Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
