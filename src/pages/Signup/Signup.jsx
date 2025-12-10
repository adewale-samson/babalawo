import React, { useState } from 'react'
import { createAccount } from '../../api/auth'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

const Signup = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const formData = {
	email: "ola@gmailiya.com",
    password: "oyinade"
}

const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    createAccount(formData)
        .then((res) => {
            console.log(res.data.access_token)
            Cookies.set('access_token', res.data.access_token)
            setLoading(false)
            navigate('/about')
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })

}
  return (
    <div>
        {loading && <h1>Loading...</h1>}
        <h2>Sign Up Form</h2>
        <form onSubmit={handleSubmit}>

            <button>Sign up</button>
        </form>
    </div>
  )
}

export default Signup