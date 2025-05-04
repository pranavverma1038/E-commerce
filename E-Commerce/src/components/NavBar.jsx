import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <div className='nav-bar'>
            <Link to={'/'}className='brand'>E-Cart</Link>
            <div className='seach-bar'>
                <input type="text" placeholder='search-products'/>
            </div>
            <Link to={'/cart'}className='cart'>cart</Link>
        </div>
        <div className='nav-bar-wrapper'>
            <div className='items'>Filter by{"->"}</div>
            <div className='items'>No filter</div>
            <div className='items'></div>
            <div className='items'>Mobiles</div>
            <div className='items'>Laptops</div>
            <div className='items'>Tablets</div>
            <div className='items'>{">="}29999</div>
            <div className='items'>{">="}49999</div>
            <div className='items'>{">="}59999</div>
        </div>
    </header>
  )
}

export default NavBar