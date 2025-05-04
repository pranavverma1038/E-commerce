import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'


const App = () => {
  const [data, setData]= useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
      <NavBar cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element={ <Products
        cart={cart} setCart={setCart} items={data}/> }/>
        <Route path='/product/:id' element ={<ProductDetails cart={cart} setCart={setCart}/>}/>
        <Route path='/search/:term' element ={<SearchItem cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element ={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      </Router>
      
    </>
  )
}

export default App