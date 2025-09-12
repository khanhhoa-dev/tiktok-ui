import axios from 'axios';

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const result = await httpRequest.get(path, option);

    return result.data;
};

export default httpRequest;
