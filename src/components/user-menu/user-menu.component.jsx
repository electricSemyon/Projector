import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import './user-menu.scss';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {menuAnchor: null, open: false};
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const userMenuAvatarStyle = { margin: '0 auto 12px auto', height: 64, width: 64 };

    return (
      <div style={{display: 'inline-block', 'marginLeft': 'auto'}} className="user-menu">
        <IconButton onClick={(e) => this.setState({menuAnchor: e.currentTarget, open: !this.state.open})}>
          <Avatar src={this.props.avatar} />
        </IconButton>

        <Menu anchorEl={this.state.menuAnchor}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}>

          <div className="user-info align-center" style={{padding: '16px'}}>
            <Avatar src={this.props.avatar} style={userMenuAvatarStyle}/>
            <Typography type="title" gutterBottom>@{this.props.user.name}</Typography>
            <Typography>{this.props.user.email}</Typography>
          </div>

          <Button style={{width: '100%'}} onClick={this.props.logout}>
            Log out
          </Button>
        </Menu>
      </div>
    );
  }
}

export default UserMenu;
