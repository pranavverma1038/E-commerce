import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Products = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);
    toast.success("Item Added To Cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-800"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-60 h-60 object-contain mb-4 hover:scale-105 transition-transform"
              />
            </Link>
            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex space-x-4">
              <span className="text-xl font-bold text-purple-700">₹{product.price}</span>
              <button
                onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default Products;
