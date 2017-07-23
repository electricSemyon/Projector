import React from 'react';
import {createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Show from '../show-if/show.jsx';
import UserMenu from '../user-menu/user-menu.component.jsx';
import Dropdown from '../dropdown/dropdown.container.jsx';

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
    console.log(this.props.store)
  }

  render() {
    return (
          <AppBar>
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>

              <Typography type="title" color="inherit" className={styleSheet.flex}>
                <h2>Projector</h2>
              </Typography>
              <Show if={localStorage.getItem('token')} className="dropdown-wrapper">
                <Dropdown currentProject="Projector"/>
              </Show>
              {/*<Show if={this.props.logged}>*/}
              <Show if={localStorage.getItem('token')} style={{marginLeft: 'auto'}}>
                <UserMenu avatar={this.props.store.auth.user ? this.props.store.auth.user.avatar : ''}
                          user={this.props.store.auth.user || {}}/>
              </Show>

              {/*<Button color="contrast" style={{'marginLeft': 'auto', 'fontWeight': 'bold'}}>Login</Button>*/}
            </Toolbar>
          </AppBar>
    );
  }
}

export default Header;
