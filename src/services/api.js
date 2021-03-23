import axios from 'axios';

const api = axios.create({
  baseURL: 'https://db.ygoprodeck.com/api/v7',
});

export default api;
