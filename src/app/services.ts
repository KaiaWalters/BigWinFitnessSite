import axios from 'axios'
const baseUrl = `http://localhost:3000` // currently only one Contacts endpoint /all-contacts, baseUrl set to this accordingly

export const getAll = async () => {
    try {
        const response = await axios.get(`${baseUrl}/events`)
        return Array.isArray(response.data)
            ? response.data
            : []
    } catch (error: unknown) {
        if(error instanceof Error) {
            console.error('GET error with contacts', error)
        }
        return []
    }
}

