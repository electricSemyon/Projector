import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
    return (
      <div style={{display: 'inline-block', 'marginLeft': 'auto'}} className="user-menu">
        <IconButton onClick={(e) => this.setState({menuAnchor: e.currentTarget, open: !this.state.open})}>
          <Avatar src={this.props.avatar} />
        </IconButton>

        <Menu anchorEl={this.state.menuAnchor}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}>
          <div className="user-info" style={{padding: '16px'}}>
            <Typography>{this.props.user.email}</Typography>
            <Typography>{this.props.user.name}</Typography>
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
