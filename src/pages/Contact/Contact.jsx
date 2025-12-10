import React, {useState, useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../../components/UserContext'
import axios from 'axios'


const Contact = () => {
  const {userData} = useContext(UserContext)
  const [picture, setPicture] = useState([])

  useEffect(()=>{
    axios.get('https://pixabay.com/api/?key=30797709-202702e8b118291843d7c664a&q=yellow+flowers&image_type=photo')
    .then(res =>{
      console.log(res)
      setPicture(res.data.hits)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
    console.log(userData)
    console.log(picture)
  return (
    <div>
      <h1>Contact</h1>
      <div>
        {picture.map((element, index, arr)=>(
          <div key={element.id}>
            <img src={element.userImageURL} alt={`flower-${index}`} />
            <p>{element.likes}</p>
            <p>{element.views}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact