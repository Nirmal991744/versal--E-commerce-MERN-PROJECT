import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddItems() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    brand: "",
    stock: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/products", product);
      toast.success("Product added successfully!");

      // Clear the form
      setProduct({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        brand: "",
        stock: "",
        rating: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="max-w-md mx-auto mb-15 mt-10 p-6 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          step="0.1"
          min="0"
          max="5"
          value={product.rating}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        {/* Image Preview */}
        {product.image && (
          <img
            src={product.image}
            alt="Preview"
            className="w-32 h-32 object-cover mt-2 rounded border"
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default AddItems;
