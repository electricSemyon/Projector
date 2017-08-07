const projectsReducer = (store = {}, action) => {
  switch(action.type) {
    case 'GET_PROJECTS_LIST':
      return {
        ...store,
        list: action.payload
      }

    case 'GET_LATEST_PROJECT':
      return {
        ...store,
        latest: store.list.find(project => project._id === action.payload._id)
      }

    case 'CREATE_PROJECT':
      return {
        ...store,
        list: [...store.list, action.payload],
        latest: action.payload
      }

    default:
      return store;
  }
}

export default projectsReducer;
