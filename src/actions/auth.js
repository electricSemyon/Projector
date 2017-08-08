import axios from 'axios';
import { push } from 'react-router-redux';
import tokenInstance from './api/token-instance';
import formInstance from './api/form-instance';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const LOG_OUT = 'LOG_OUT';

const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, payload: response.data });
const signUpSuccess = (response) => ({ type: SIGN_UP_SUCCESS, payload: response.data });
const logoutSuccess = () => ({ type: LOG_OUT });

const getUser = () => dispatch =>
  tokenInstance()
    .get(`/api/users/me`)
    .then(res => dispatch(loginSuccess(res)))
    .catch(() => {
      localStorage.removeItem('token');
      dispatch(push('/login'));
    });

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

const logout = (credentials) => dispatch => {
    localStorage.removeItem('token');
    dispatch(push('/login'));
    dispatch(logoutSuccess());
};

const signUp = (credentials) => dispatch => {
  formInstance()
    .post(`/api/users`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(signUpSuccess(res));
      return res.data.token;
    })
    .then(() => getUser())
    .then(() => dispatch(push('/home')))
    .catch(err => console.log(err));
};

const findUser = email =>
  tokenInstance().get(`/api/users?email=${email}`)
    .then(res => res.data);

export default {
  login,
  logout,
  signUp,
  getUser,
  findUser
}