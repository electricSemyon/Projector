import React from 'react';
import {createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Show from '../show-if/show.jsx';
import UserMenu from '../user-menu/user-menu.component.jsx';
import Dropdown from '../project-select-dropdown/dropdown.container.jsx';

import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';

import './header.style.scss';

const styleSheet = createStyleSheet('ButtonAppBar', {
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

  render() {
    return (
          <AppBar>
            <Toolbar style={{'paddingLeft': '40px'}}>
              <Typography type="title" color="inherit" className={styleSheet.flex}>
                <h2>Projector</h2>
              </Typography>

              <Show ifTrue={this.props.user} className="dropdown-wrapper">
                <Dropdown/>
              </Show>

              <Show ifTrue={localStorage.getItem('token')} style={{marginLeft: 'auto'}}>
                <Badge badgeContent={14} color="accent" style={{marginRight: '26px', top: '-6px'}}>
                  <MailIcon />
                </Badge>

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
