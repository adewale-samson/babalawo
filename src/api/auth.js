import axios from 'axios'
import { baseUrlInstance } from './base'


export const createAccount = (data) => {
    return baseUrlInstance.post('/auth/login', data)
}
export const getAllData = (token) => {
    return baseUrlInstance.get('/products?page=1')
}