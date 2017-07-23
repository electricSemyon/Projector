import axios from 'axios';
const token = localStorage.getItem('token');

const tokenFormInstance = () =>
  axios.create({
    url: '/api',
    headers: {
      "enctype": "multipart/form-data",
      "Cache-Control": "no-cache",
      "Cache-Control": "no-store",
      "Pragma": "no-cache",
      'Authorization': `Bearer ${token}`
    }
  })

export default tokenFormInstance;
