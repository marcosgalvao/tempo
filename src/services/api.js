import axios from 'axios';

// https://api.hgbrasil.com/weather?key=fbd5b149&lat=-23.682&lon=-46.875

export const key = '879ef901';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;