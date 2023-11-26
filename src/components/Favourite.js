import React from 'react'
import { useSelector } from 'react-redux'
import { useActionData } from 'react-router-dom'
import ProductCard from './ProductCard'

export const Favourite = () => {

  let favProducts = useSelector(state => state.favProductReducer)
  
  return (
    <div className='d-flex justify-content-between flex-wrap mt-5'>
    {
      favProducts.map((prod)=>{
        return (

        <ProductCard
          type={true}
          id={prod.id}
          title={prod.title} 
          image={prod.image} 
          price={prod.price} 
          desc={prod.description}
        />
        )
      })
    }
  </div>
  )
}
