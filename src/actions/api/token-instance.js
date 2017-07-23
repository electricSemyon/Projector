import axios from 'axios';
const token = localStorage.getItem('token');

const tokenInstance = () =>
  axios.create({
    url: '/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

export default tokenInstance;
