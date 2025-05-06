import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useAuth } from "../utils/AuthContext";

const NavBar = ({ cart,setData }) => {
  const {logoutUser}= useAuth();

 const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
    navigate('/');
    
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
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
    <header>
      <div className="nav-bar fixed top-0 left-0 w-full z-50 items-center justify-between px-4 py-2 bg-black text-white">
        <div
        onClick={()=>{
          setData([...items]);
          navigate('/');
        }}
        className="brand cursor-pointer">
          E-Cart
        </div>
        <form onSubmit={handleSubmit} className="search-bar pt-2">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="search-products"
            className="bg-white text-black "
          />
        </form>
        <img src='/menu.svg'
          className="bg-white w-7 h-7 mt-1.5"
        />
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary bg-white position-relative">
            <img src='/shopping-cart.png'
            className="w-7 h-7 "
            ></img>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
        <button 
        onClick={handleLogout}
        className="bg-white text-black w-20 h-10 rounded">Logout</button>
      </div>
      {location.pathname === '/' && (
  <div className="bg-gray-300 py-4 px-6 flex flex-wrap justify-between items-center gap-y-4 pl-20 pr-20">
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
        <img src={item.img} alt={item.title} className=" w-20 h-20 mb-1" />
        <span className="text-sm font-medium text-gray-800">{item.title}</span>
      </div>
    ))}
  </div>
)}

      
    </header>
  );
};

export default NavBar;
