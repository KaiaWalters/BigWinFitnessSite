import axios from 'axios'
const baseUrl = `http://localhost:3001/events`

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        console.log(response.data)
        return Array.isArray(response.data) ? response.data : []
    } catch (error) {
        console.error('GET error', error)
        return {success: false, message: 'Failed to fetch data from server'}
    }
}

export default {
    getAll
}