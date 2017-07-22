const authReducer = (store = {}, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...store,
        user: action.payload
      }

    case 'SIGNUP_SUCCESS':
      return {
        ...store,
        user: action.payload
      }

    default:
      return store;
  }
}

export default authReducer;
