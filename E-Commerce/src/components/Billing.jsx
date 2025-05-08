import React, { useEffect, useState } from "react";
import { getCartItems } from "./getCartItems";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";




const Billing = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate()
  let total=0;
  for(let i=0; i<cart.length;i++){
    total+= Number(cart[i].price)
  }

  useEffect(()=>{
    const fetchCart= async()=>{
      const items = await getCartItems(user.$id);
      setCart(items)
    };
    fetchCart()
  },[user])
  const handleRedirectToPayment = () => {
    const total = cart.reduce((acc, item) => acc + Number(item.price), 0);
    navigate("/payment-gateway", { state: { cart, total } });
  };
  useEffect(() => {
    console.log("Payment page loaded");
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 category-container">
      <h1 className="text-3xl font-bold mb-6 text-center">Billing Summary</h1>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={index} className="flex border p-4 rounded-lg shadow-sm bg-white mt-10">
          <div className="flex-1">
          <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            
            <p className="text-black font-bold">₹{item.price}</p>
            </div>
            <img src={item.image} className="ml-6 w-40 h-40 object-contain"></img>  

          </div>
        ))}
      </div>
      <div className="mt-6 text-right text-2xl font-bold">
        Total: ₹{total}
      </div>
     <div className="flex justify-center">
     <button
          onClick={handleRedirectToPayment} 
          className="flex bg-green-300 w-15 h-10 rounded px-3 py-2 hover:bg-green-600"
        >
          Pay
        </button>
    </div>
    </div>
  );
};

export default Billing;
