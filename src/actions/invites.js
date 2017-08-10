import axios from 'axios';
import tokenInstance from './api/token-instance';

const sendInvites = ({emails, projectId}) => dispatch =>
  tokenInstance()
    .post('/api/invites', {projectId, emails})
    .catch(err => console.log(err));

export default {
  sendInvites
}
