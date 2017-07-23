import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import Avatar from 'material-ui/Avatar';
import './dropdown.style.scss';

import Icon from 'material-ui-icons/Schedule';
import NewProjectPopup from '../new-project-popup/new-project-popup.container.jsx';

const MenuIcon = props => <div style={{marginRight: '8px'}}>{props.children}</div>

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
      newProjectPopupOpened: false
    }

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    console.log('will mount')
    this.props.getProjectsList()
      this.props.getLatestProject();
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  renderExistingProjects() {
    return (this.props.list || []).map((project, i) =>
      <MenuItem key={i}>
        <MenuIcon>
          <Avatar style={{height: '30px', width: '30px'}} src={project.icon} />
        </MenuIcon>
        {project.title}
      </MenuItem>)
  }

  render() {
    const latest = this.props.latest || {};

    return (
      <div>
        <Button ref="anchor"
                style={{color: '#ddd', fontWeight: 600}}
                onClick={e => this.setState({open: true, anchor: e.target})}>
          <MenuIcon>
            <Avatar style={{height: '30px', width: '30px'}} src={latest.icon} />
          </MenuIcon>
          {latest.title}
          <KeyboardArrowDownIcon/>
        </Button>

        <Menu id="simple-menu" anchorEl={this.state.anchor} open={this.state.open} onRequestClose={this.handleRequestClose}>
          {this.renderExistingProjects()}
          <Button style={{width: '100%'}} onClick={() => this.setState({newProjectPopupOpened: true})}>Create new project</Button>
        </Menu>

        <NewProjectPopup requestClose={() => this.setState({newProjectPopupOpened: false})}
                         open={this.state.newProjectPopupOpened} />
      </div>
    );
  }
}

export default Dropdown;
