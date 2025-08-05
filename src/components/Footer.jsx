import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl text-blue-600 font-semibold mb-3">
            🛒 E-Commerce
          </h2>
          <p className="text-sm text-gray-400">
            Empowering your shopping experience with the best deals and quality
            products.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg text-blue-600 font-medium mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg text-blue-600 font-medium mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 text-2xl">
              <AiFillFacebook />
            </a>
            <a href="#" className="hover:text-blue-600 text-2xl">
              <AiFillInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 text-2xl">
              <AiFillTwitterCircle />
            </a>
            <a href="#" className="hover:text-blue-600 text-2xl">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        &copy; 2025 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
