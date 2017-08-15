const authReducer = (store = {}, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...store,
        user: action.payload
      };

    case 'SIGN_UP_SUCCESS':
      return {
        ...store,
        user: action.payload
      };

    case 'LOG_OUT':
      return {
        ...store,
        user: null,
        projects: null,
        boards: null
      };

    case 'RECEIVE_INVITES':
      return {
        ...store,
        user: {
          ...store.user,
          invites: action.payload
        }
      }

    default:
      return store;
  }
};

export default authReducer;
