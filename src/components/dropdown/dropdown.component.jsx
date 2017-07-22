import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import './dropdown.style.scss';

import Icon from 'material-ui-icons/Schedule';
import NewProjectPopup from '../new-project-popup/new-project-popup.component.jsx';

const MenuIcon = props => <div style={{marginRight: '8px'}}>{props.children}</div>

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
      currentProject: this.props.currentProject,
      projects: [
        { title: 'Some Shitty Project' },
        { title: 'One More Shitty Project' }
      ],
      newProjectPopupOpened: false
    }

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  renderExistingProjects() {
    return this.state.projects.map((project, i) =>
      <MenuItem key={i}>
        <MenuIcon>
          <Icon/>
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
          <MenuIcon><Icon/></MenuIcon> {this.state.currentProject}
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
