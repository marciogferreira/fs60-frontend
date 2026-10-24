import axios from 'axios'
const api = axios.create({
    // baseURL: 'https://fakestoreapi.com/',
    baseURL: 'https://dummyjson.com/',
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token-fs60')}`
    }
})
// api.get('products')
// api.get('products/'+id)
// api.post('products', dados)
// api.put('products/'+id, dados)
// api.delete('products/'+id)

export default api
