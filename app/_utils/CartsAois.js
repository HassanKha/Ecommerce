const { default: axiosClient } = require("./axiosClient");


const addToCart = (payload) => axiosClient.post('/carts',payload)
const getCarts = (email) => axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)
const delCarts = (id) => axiosClient.delete(`/carts/${id}`)

export default { addToCart,getCarts,delCarts};