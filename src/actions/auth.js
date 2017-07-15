import axios from 'axios';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, payload: response.data.token });
const signUpSuccess = (response) => ({ type: SIGN_UP_SUCCESS, payload: response });

const login = (credentials) => dispatch => {
  axios.post(`/auth/local`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch(loginSuccess(res));
    });
}

const signUp = (credentials) => dispatch => {
  const instance = axios.create({
    url: `/api/users`,
    timeout: 1000,
    headers: {
      "enctype": "multipart/form-data",
      "Cache-Control": "no-cache",
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    }
  });
  instance.post(`/api/users`, credentials)
    .then(res => {
      dispatch(signUpSuccess());
    });
}

export default {
  login,
  signUp
}