import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async () => {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
}


const create = async (note) => {
    const request = axios.post(baseUrl, note);
    const res = await request;
    return res.data;
}

const remove = async (id) => {
    const request = axios.post(`${baseUrl}/${id}`);
    const res = await request;
    return res.data;
}

export default { getAll, create, remove }