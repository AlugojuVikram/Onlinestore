import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export const Products = () => {

  let [products, setProducts] = useState([])

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='d-flex justify-content-between flex-wrap mt-2'>
      {
        (products.length) ? products.map((prod) => {
          return (
            <ProductCard
              type={false}
              id={prod.id}
              title={prod.title}
              image={prod.image}
              price={prod.price}
              desc={prod.description}
            />
          )
        }) : <button class="btn btn-success" style={{padding:"12px",marginLeft:"45%",marginTop:"15%",backgroundColor:"black"}} type="button" disabled>
          <span role="status" style={{fontSize:"20px",color:"white"}}>Loading....</span>
          <span class="spinner-border spinner-border-sm"aria-hidden="true"></span>
            </button>
      }
    </div >
  )
}
