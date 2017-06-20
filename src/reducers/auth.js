const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload
      };

    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}

export default auth;