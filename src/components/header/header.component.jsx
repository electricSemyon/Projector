import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Show from '../utils/show.jsx';
import UserMenu from '../user-menu/user-menu.component.jsx';
import Dropdown from '../project-select-dropdown/dropdown.container.jsx';
import NotificationBadge from './notification-badge.component.jsx';

import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';

import './header.style.scss';

const styleSheet = theme =>({
  root: {
    marginTop: 30,
  },
  flex: {
    flex: 1,
  },
  button: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user})
  }

  renderActivityDialog() {

  }

  render() {
    return (
          <AppBar>
            <Toolbar className="header-toolbar">
              <Typography style={{fontSize: 30}} type="title" color="inherit" >
                Projector
              </Typography>

              <Show ifTrue={this.props.user} className="dropdown-wrapper">
                <Dropdown/>
              </Show>

              <Show ifTrue={this.props.user} style={{marginLeft: 'auto'}}>
                <NotificationBadge count={1} className="mail-badge"/>

                <UserMenu avatar={this.props.user ? this.props.user.avatar : ''}
                          user={this.props.user || {}}
                          logout={this.props.logout}/>
              </Show>

              </Toolbar>
          </AppBar>
    );
  }
}

export default Header;
