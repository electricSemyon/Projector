import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import Avatar from 'material-ui/Avatar';
import './dropdown.style.scss';

import Icon from 'material-ui-icons/Schedule';
import NewProjectPopup from '../../containers/new-project-popup.container.jsx';

const MenuIcon = props => <div style={{marginRight: '8px'}}>{props.children}</div>

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
      currentProject: { title: 'First Shitty Project' },
      newProjectPopupOpened: false
    }
    console.log('state', this.state.projects)

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  renderExistingProjects() {
    return (this.props.list || []).map((project, i) =>
      <MenuItem key={i}>
        <MenuIcon>
          <Avatar alt="Remy Sharp" src={project.icon} />
        </MenuIcon>
        {project.title}
      </MenuItem>)
  }

  render() {
    return (
      <div>
        <Button ref="anchor"
                style={{color: '#ddd', fontWeight: 600}}
                onClick={e => this.setState({open: true, anchor: e.target})}>
          <MenuIcon> <Icon/> </MenuIcon> {this.state.currentProject.title}
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
