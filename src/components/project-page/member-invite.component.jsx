import React, {Component} from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import margin from '../utils/margin.component.jsx';
import ChipsInput from '../chips-input/chips-input.component.jsx';

import auth from '../../actions/auth';

class MemberInvite extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEmailChange(email) {
    return auth.findUser(email.label).then(users => ({
      label: users[0].email,
      avatar: users[0].avatar
    }))
      .catch(err => ({
        error: 'There is no user with this email'
      }))
  }

  render() {
    return (<div>
      <Menu
        anchorEl={this.props.anchor}
        open={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        MenuListProps={{
          style: {
            width: 450,
            height: 300,
            padding: 32
          },
        }}
      >
        <div className="no-outline">
          <ChipsInput onAddChip={() => console.log('add')} middleware={this.handleEmailChange}/>

          {margin(32)}

          <Button color="primary" raised className="full-width" onClick={this.createBoard}>send invites</Button>
        </div>
      </Menu>
    </div>)
  }
}


export default MemberInvite;
