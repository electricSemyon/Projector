import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <AppBar
        title="Projector"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
        style={{
          'fontFamily': 'Sonsie One'
        }}
      />
    );
  }
}

export default Header;
