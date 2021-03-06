export default (type, value) => {
  switch(type) {
    case 'email':
      return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .test(value);

    case 'password':
      return !!(value && value.length >= 6);

    case 'username':
      return !!(value && value.length >= 4);

    default:
      return false;
  }
}