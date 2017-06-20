import axios from 'axios';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, payload: response });
const signUpSuccess = (response) => ({ type: SIGN_UP_SUCCESS, payload: response });

const login = (credentials) => dispatch => {
  console.log(credentials)
  axios.post(`/auth/local`, credentials)
    .then(res => {
      console.log(res);
      dispatch(loginSuccess());
    });
}

const signUp = (credentials) => dispatch => {
  axios.post(`/api/users`, credentials)
    .then(res => {
      console.log(res);
      dispatch(signUpSuccess());
    });
}

export default {
  login,
  signUp
}