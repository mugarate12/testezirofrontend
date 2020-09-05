import React from 'react'
import './index.css'

import Logo from './../../assets/logo.png'

export default function Loading() {
  return (
    <div className='container'>
      <img className='logo' src={Logo} alt="logo da ZiroApp"/>
    </div>
  )
}
