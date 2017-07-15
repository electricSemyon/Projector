import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';

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
  render() {
    return (
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={styleSheet.flex}>
                <h2>Projector</h2>
              </Typography>
              <Button color="contrast" style={{'marginLeft': 'auto', 'fontWeight': 'bold'}}>Login</Button>
            </Toolbar>
          </AppBar>
    );
  }
}

export default Header;
