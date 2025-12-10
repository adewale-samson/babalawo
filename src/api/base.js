import axios from "axios";


export const baseUrlInstance = axios.create({
  baseURL: 'https://prominence-xn1b.onrender.com',
});