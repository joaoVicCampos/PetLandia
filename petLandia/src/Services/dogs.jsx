import axios from 'axios'

const dogsAPI = axios.create({ baseURL: 'http://localhost:8080/dogs' })

const getDogs = async () => {
    const response = await dogsAPI.get('/')
    return response.data
}

export {
    getDogs
}