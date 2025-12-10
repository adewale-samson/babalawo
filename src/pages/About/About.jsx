import React, { useEffect, useState } from 'react'
import { getAllData } from '../../api/auth'

const About = () => {
  const [products, setProducts] = useState([])
  const getToken = () => {
    const token = Cookies.get('access_token')
    console.log(token)
    return token
  }

  useEffect(()=>{
    getAllData()
    .then(res =>{
      // console.log(res)
      setProducts(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  console.log(products)
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {products.map((product, index)=>(
        <div>
          <h1>{product.brand}</h1>
          <p>{product.category}</p>
          <p>{product.color}</p>
          <p>{product.description}</p>
        </div>
      ))}
      About
    </div>
  )
}

export default About