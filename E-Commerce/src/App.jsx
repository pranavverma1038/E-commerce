import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Billing from './components/Billing'
import NavBar from './components/NavBar'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider, useAuth } from './utils/AuthContext'
import { items } from './components/Data'
import { ToastContainer } from "react-toastify"
import QrCodePayment from './components/QrCodePayment'




function AppContent() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const { user } = useAuth()
  const [itemsPresent, setItemsPresent] = useState(true)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      
      {user && <NavBar cart={cart} setData={setData} setItemsPresent={setItemsPresent}/>}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Products cart={cart} setCart={setCart} items={data} itemsPresent={itemsPresent}/>} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/billing" element={<Billing/>} />
        <Route path="/payment-gateway" element={<QrCodePayment />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
