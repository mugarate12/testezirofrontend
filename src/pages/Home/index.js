import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import regeneratorRuntime from "regenerator-runtime"
import './index.css'

import api from './../../config/axiosConfig'

import Header from './../../components/Header/index'

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      await api.get('/dev/products')
        .then(response => {
          console.log(response.data)
          setProducts(response.data)
        })
        .catch(error => console.log(error))
    }

    if (products.length === 0) {
      fetchProducts()
    }
  }, [products])

  function renderProducts() {
    return products.map((product) => {
      return (
        <div className='card-home-container' key={product.id}>
          <div>
            <img className='card-home-img' src={product.url} alt="imagem do card"/>

            <p className='card-product-information'>{product.name}</p>
            <p className='card-product-information'>R${product.price}</p>
          </div>

          <div className='card-home-details'>
            <p className='card-home-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <button className='card-btn' onClick={() => addProductToCart(product)}>
              <p className='card-btn-text'>Adicionar ao carrinho</p>
            </button>
          </div>
        </div>
      )
    })
  }

  async function addProductToCart(product) {
    await api.post('/dev/cart', {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url
    })
      .then(response => {
        console.log(response)
        setCartCount(cartCount + 1)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <h1 className='page-title'>Novidades</h1>

      <div className='cart-carrossel'>
        {renderProducts()}

      </div>
    </>
  )
}

export default hot(module)(App)
