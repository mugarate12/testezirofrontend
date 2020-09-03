import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import './index.css'

import Logo from './../../assets/logo.png'

export default function Header({ cartCount }) {
  const history = useHistory()

  function renderCartCount() {
    if (!!cartCount) {
      return (
        <div className='cart-count-container' >
          <p className='cart-count'>{cartCount}</p>
        </div>
      )
    }
  }

  return (
    <header className='header-box'>
      <button className='logo-btn'>
        <img src={Logo} alt='logo' className='logo-img' />
      </button>

      <button className='cart-btn' onClick={() => history.push('/cart')}>
        <FaShoppingCart className='cart-img' />
        {renderCartCount()}
      </button>
    </header>
  )
}
