import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Products = ({ items, cart, setCart }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);
    toast.success("Item Added To Cart");
  };

  const cardVariant = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -300 : 300,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 1.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {items.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
              initial={hasAnimated ? false : "hidden"}
              animate={hasAnimated ? "visible" : "hidden"}
              custom={index}
              variants={cardVariant}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-60 h-60 object-contain mb-4 hover:scale-105 transition-transform"
                />
              </Link>
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">{product.description}</p>
              <div className="mt-4 flex space-x-4 items-center">
                <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                <button
                  onClick={() =>
                    addToCart(product.id, product.price, product.title, product.description, product.imgSrc)
                  }
                  className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
