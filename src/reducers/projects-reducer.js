const projectsReducer = (store = {}, action) => {
  switch(action.type) {
    case 'GET_PROJECTS_LIST':
      return {
        ...store,
        list: action.payload
      }

    default:
      return store;
  }
}

export default projectsReducer;
