import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { hot } from 'react-hot-loader'
import regeneratorRuntime from "regenerator-runtime"
import './index.css'

import Header from './../../components/Header/index'

import api from './../../config/axiosConfig'

const Cart= () => {
  const [page, setPage] = useState(1)
  const numberOfItemsPerPage = 3
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProductsInCart() {
      await api.get('/dev/cart')
        .then(response => {
          console.log(response.data)
          console.log(response.headers)
          setProducts(response.data)
        })
        .catch(console.log)
    }

    if (products.length === 0) {
      fetchProductsInCart()
    }
  }, [products])

  function renderProducts() {
    return products.map((product, index) => {
      if ((index + 1) <= (page * numberOfItemsPerPage)) {
        return (
          <div className='grid-products-body-container' key={product.id}>
            <div className='grid-products-body-img-container' >
              <img className='grid-products-body-img' src={product.url} alt="imagem do produto"/>
              <p className='grid-products-body-text' >{product.name}</p>
            </div>
  
            <p className='grid-products-body-count' >{product.count}</p>
  
            <p className='grid-products-body-price' >R${product.price}</p>
  
            <button className='grid-products-body-btn' onClick={() => fetchRemoveProduct(product)}>
              <p className='grid-products-body-btn-text' >Remover</p>
            </button>
          </div>
        )
      }
    })
  }

  function handleBackPage() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleForwardPage() {
    const isValidPage = (products.length + numberOfItemsPerPage) > (page + 1) * numberOfItemsPerPage

    if (isValidPage) {
      setPage(page + 1)
    }
  }

  async function fetchRemoveProduct(product) {
    console.log(product.id)
    console.log(`/dev/cart?id=${product.id}`)
    await api.delete(`/dev/cart?id=${product.id}`)
      .then(async (response) => {
        console.log(response)

        await api.get('/dev/cart')
          .then(response => {
            setProducts(response.data)
          })
          .catch(console.log)
      })
      .catch(console.log)
  }

  return (
    <>
      <Header />

      <h1 className='page-title'>Carrinho</h1>

      <div className='grid-products-container' >
        <header className='grid-products-header-container' >
          <p className='grid-products-header-text' >Produto</p>
          <p className='grid-products-header-text' >Quantidade</p>
          <p className='grid-products-header-text' >Preço</p>
        </header>

        {renderProducts()}

        <div className='grid-products-body-pagination'>
          <button className='grid-products-body-pagination-icon-btn' onClick={handleBackPage}>
            <FaArrowLeft className='grid-products-body-pagination-icon' />
          </button>

          <button className='grid-products-body-pagination-icon-btn' onClick={handleForwardPage}>
            <FaArrowRight className='grid-products-body-pagination-icon' />
          </button>
        </div>

        <footer className='grid-products-footer' >
          <button className='grid-products-footer-btn' >
            <p className='grid-products-footer-btn-text' >Finalizar Compra</p>
          </button>
        </footer>
      </div>
    </>
  )
}

export default hot(module)(Cart)
