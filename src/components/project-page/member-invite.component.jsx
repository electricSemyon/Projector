import React, {Component} from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Margin from '../utils/margin.component.jsx';
import ChipsInput from '../chips-input/chips-input.component.jsx';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import auth from '../../actions/auth';

class MemberInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emails: [], notify: false};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEmailAdd = this.handleEmailAdd.bind(this);
    this.sendInvites = this.sendInvites.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  handleEmailChange(email) {
    if(email.label === this.props.currentUser.email)
       return Promise.reject({error: 'You cannot invite yourself'});

    return auth.findUser(email.label)
      .then(users => ({
        label: users[0].email,
        avatar: users[0].avatar
      }))
      .catch(err => Promise.reject({error: 'There is no user with this email'}));
  }

  handleEmailAdd(email, emails) {
    this.setState({emails: emails.map(e => e.label)});
  }

  sendInvites() {
    this.props.sendInvites({emails: this.state.emails, projectId: this.props.projectId});
    this.setState({notify: true});
    this.props.onRequestClose()
  }

  closeNotification() {
    this.setState({notify: false});
  }

  render() {
    return (<div>
      <Menu
        anchorEl={this.props.anchor}
        open={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        MenuListProps={{style: {width: 450, height: 300, padding: 32}}}>
        <div className="no-outline">
          <ChipsInput onAddChip={this.handleEmailAdd} middleware={this.handleEmailChange}/>

          <Margin height={32}/>

          <Button color="primary" raised className="full-width" onClick={this.sendInvites}>send invites</Button>
        </div>
      </Menu>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.notify}
        autoHideDuration={2000}
        onRequestClose={this.closeNotification}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Invite(s) has been sent</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.closeNotification}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>)
  }
}


export default MemberInvite;
