const boardsReducer = (store = {}, action) => {
  switch(action.type) {
    case 'GET_BOARDS':
      return {
        ...store,
        list: action.payload
      }

    default:
      return store;
  }
}

export default boardsReducer;
