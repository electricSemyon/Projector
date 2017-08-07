import React, {Component} from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import margin from '../utils/margin.component.jsx';
import ChipsInput from '../chips-input/chips-input.component.jsx';

class MemberInvite extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEmailChange(event) {
    this.setState({})
  }

  render() {
    return (<div>
      <Menu
        anchorEl={this.props.anchor}
        open={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        MenuListProps={{
          style: {
            width: 320,
            height: 400,
            padding: 32
          },
        }}
      >
        <div className="no-outline">
          <ChipsInput/>

          {margin(32)}

          <Button color="primary" raised className="full-width" onClick={this.createBoard}>send invites</Button>
        </div>
      </Menu>
    </div>)
  }
}


export default MemberInvite;
