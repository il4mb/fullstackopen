import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


const create = (note) => {
    const request = axios.post(baseUrl, note);
    return request.then(res => res.data);
}

export default { getAll, create }