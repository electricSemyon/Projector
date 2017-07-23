import axios from 'axios';

const formInstance = () =>
  axios.create({
    headers: {
      "enctype": "multipart/form-data",
      "Cache-Control": "no-cache",
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    }
})

export default formInstance
