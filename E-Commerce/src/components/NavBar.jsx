import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";


const NavBar = ({ cart,setData }) => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header>
      <div className="nav-bar">
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
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary bg-white position-relative">
            <img src='/shopping-cart.png'
            className="w-5 h-5"
            ></img>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
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
        <img src={item.img} alt={item.title} className=" w-35 h-30 mb-1" />
        <span className="text-sm font-medium text-gray-800">{item.title}</span>
      </div>
    ))}
  </div>
)}

      
    </header>
  );
};

export default NavBar;
