import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate()

  const goToBilling = () => {
    navigate("/billing", { state: { cart } });
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto pt-5 px-4">
        {cart.length === 0 ? (
          <div className="text-center mt-10">
            <h1 className="text-2xl font-semibold mb-4">Your Cart Is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden my-5"
            >
              <div className="md:w-1/3 w-full flex justify-center items-center bg-white p-4">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-40 md:h-48 object-contain"
                />
              </div>
              <div className="md:w-2/3 p-4 flex flex-col justify-center items-center text-center">
                <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
                <p className="text-gray-700 text-sm mb-2">
                  {product.description}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  Last updated 3 mins ago
                </p>
                <div className="flex justify-center gap-3">
                  <button className="btn btn-primary">₹ {product.price}</button>
                  <button 
                  onClick={goToBilling}
                  className="btn btn-warning">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length !== 0 && (
        <div className="flex justify-center items-center my-5 gap-4">
          <button 
          onClick={goToBilling}
          className="btn btn-warning">CheckOut</button>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
