import axios from 'axios';

const api = axios.create({
  baseURL: 'http://coffeespace.tech:21032'
});

export default api;