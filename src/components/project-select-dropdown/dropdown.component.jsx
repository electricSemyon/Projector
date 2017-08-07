import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import Avatar from 'material-ui/Avatar';
import './dropdown.style.scss';

import Show from '../utils/show.jsx';
import NewProjectPopup from '../new-project-popup/new-project-popup.container.jsx';

const MenuIcon = props => <div className="menu-icon">{props.children}</div>

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: null,
      newProjectPopupOpened: false
    };

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    this.props.getProjectsList()
      .then(() => this.props.getLatestProject())
      .catch(err => console.log(err));
  }

  handleClickListItem(id) {
    this.props.switchCurrentProject(id);
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  renderExistingProjects() {
    const projectItemStyle = {paddingLeft: 32, paddingRight: 32};

    return (this.props.list || []).map((project, i) =>
      <MenuItem style={projectItemStyle} key={i} onClick={() => this.handleClickListItem(project)}>
        <MenuIcon>
          <Avatar className="project-icon" src={project.icon}/>
        </MenuIcon>
        {project.title}
      </MenuItem>)
  }

  render() {
    const latest = this.props.latest || {};

    return (
      <Show ifTrue={this.props.list && this.props.list.length}>
        <div>
          <Button ref="anchor"
                  style={{color: '#ddd', fontWeight: 600}}
                  onClick={e => this.setState({open: true, anchor: e.target})}>
            <MenuIcon>
              <Avatar className="project-icon" src={latest.icon}/>
            </MenuIcon>
            {latest.title}
            <KeyboardArrowDownIcon/>
          </Button>

          <Menu id="simple-menu" anchorEl={this.state.anchor} open={this.state.open}
                onRequestClose={this.handleRequestClose}>
            {this.renderExistingProjects()}
            <Button className="full-width" onClick={() => this.setState({newProjectPopupOpened: true})}>Create new
              project</Button>
          </Menu>

          <NewProjectPopup
            requestClose={() => this.setState({newProjectPopupOpened: false})}
            open={this.state.newProjectPopupOpened}/>
        </div>

      </Show>
    );
  }
}

export default Dropdown;
