import io from 'socket.io-client';

export default function (store) {
  console.log('sockets')
  const socket = io.connect(`localhost`,
    {
      path: "/sockets",
      query: `token=${localStorage.getItem('token')}`,
    });
  socket.on('connect_error', function(){
    console.log('Connection Failed');
  });
  socket.on('connection', () => {
    console.log('socket connection')
  })
  socket.on('connect', () => {
    console.log('socket connection')
  })
  socket.on('message', message => {
    console.log(message)
    //store.dispatch(actions.addResponse(message));
  });
}