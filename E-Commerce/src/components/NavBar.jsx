import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useAuth } from "../utils/AuthContext";

const NavBar = ({ cart, setData }) => {
  const { logoutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
    navigate('/');
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header className="w-full">
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black text-white px-7 py-2 flex flex-wrap items-center justify-between gap-4 ">
        
        {/* Logo */}
        <div
          onClick={() => {
            setData([...items]);
            navigate('/');
          }}
          className="cursor-pointer text-xl font-semibold"
        >
          E-Cart
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex items-center w-full md:w-auto flex-grow md:flex-grow-0">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="search products"
            className="bg-white text-black px-2 py-1 rounded w-full md:w-64"
          />
          <img
            src="/menu.svg"
            className="ml-2 h-7 w-7 bg-white p-1 rounded"
            alt="menu"
          />
        </form>

        {/* Cart + Logout */}
        <div className="flex items-center gap-4 ml-auto">
          <Link to={"/cart"}>
            <button type="button" className="relative bg-white p-1 rounded">
              <img src="/shopping-cart.png" className="w-7 h-7" alt="cart" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-1.5 rounded-full">
                {cart.length}
              </span>
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-white text-black px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Categories Section */}
      {location.pathname === '/' && (
        <div className="mt-13 bg-gray-300 py-4 px-26 flex flex-wrap justify-between items-center gap-4">
          {[
            { category: 'mobiles', title: 'Mobiles', img: '/mobileimg.jpg' },
            { category: 'laptops', title: 'Laptops', img: '/laptopimg.jpg' },
            { category: 'tablets', title: 'Tablets', img: '/tabletimg.jpg' },
            { category: 'earphones', title: 'EarPods', img: '/earphoneimg.jpg' },
            { category: 'tablets', title: 'Watches', img: '/watchimg.jpg' },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => filterByCategory(item.category)}
              className="cursor-pointer bg-white rounded-xl shadow-md px-4 py-2 flex flex-col items-center min-w-[80px] hover:bg-purple-200 transition"
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 mb-1" />
              <span className="text-sm font-medium text-gray-800">{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
