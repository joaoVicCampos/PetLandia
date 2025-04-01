import axios from 'axios'

const catsAPI = axios.create({ baseURL: 'http://localhost:8080/cats' })

const getCats = async () => {
    const response = await catsAPI.get('/')
    return response.data
}

export {
    getCats
}