import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">E-Cart</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for electronics and more. Bringing top tech to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white text-white">Home</Link></li>
            <li><Link to="/cart" className="hover:text-white text-white">Cart</Link></li>
            <li><Link to="/#products" className="hover:text-white text-white">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@ecart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Bengaluru, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} E-Cart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
