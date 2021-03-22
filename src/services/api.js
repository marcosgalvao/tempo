import axios from 'axios';

export const key = 'SUA_CHAVE';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;
