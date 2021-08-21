import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omega-tech.herokuapp.com/',
});

export default api;