import axios from 'axios'

const baseUrl = `${window.location.protocol}//${window.location.host}/api/persons`;

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data;
}


const create = async (person) => {
    try {
        const response = await axios.post(baseUrl, person);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Unknown error");
    }
};

const remove = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Unknown error");
    }
}

export default { getAll, create, remove }