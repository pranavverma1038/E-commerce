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
  return (
    <>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Products items={data}/> }/>
        <Route path='/product/:id' element ={<ProductDetails/>}/>
        <Route path='/search/:term' element ={<SearchItem/>}/>
        <Route path='/cart/:id' element ={<Cart/>}/>
      </Routes>
      </Router>
      
    </>
  )
}

export default App