import axios from 'axios'

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use( async config => {
    const token = 'Vj54_lSmwq6MA86FaEqj '

    config.headers.Authorization = `Bearer ${token}`

    return config


})

export default api