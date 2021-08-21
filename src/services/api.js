import axios from 'axios';

export const getOptions = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
};

const api = axios.create({
  baseURL: 'https://omega-tech.herokuapp.com/',
});

export default api;
