import axios from 'axios';
import { push } from 'react-router-redux';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, payload: response.data });
const signUpSuccess = (response) => ({ type: SIGN_UP_SUCCESS, payload: response.data });

const getUser = (token = localStorage.getItem('token'), callback) => dispatch =>
  axios.create({
    url: `/api/users/me`,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .get(`/api/users/me`)
    .then(res => {
      dispatch(loginSuccess(res));
    })
    .catch(() => {
      localStorage.removeItem('token')
      dispatch(push('/login'));
    })

const login = (credentials) => dispatch =>
  axios.post(`/auth/local`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(loginSuccess(res));
      return res.data.token;
    })
    .then(token => getUser(token))
    .then(() => dispatch(push('/home')))
    .catch(err => console.log(err));

const signUp = (credentials) => dispatch => {
  axios.create({
    headers: {
      "enctype": "multipart/form-data",
      "Cache-Control": "no-cache",
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    }
  })
    .post(`/api/users`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(signUpSuccess(res));
      return res.data.token;
    })
    .then(token => getUser(token))
    .then(() => dispatch(push('/home')));
}

export default {
  login,
  signUp,
  getUser
}