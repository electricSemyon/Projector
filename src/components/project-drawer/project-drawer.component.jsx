import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui-icons/Home';
import DeveloperBoardIcon from 'material-ui-icons/DeveloperBoard';
import SettingsIcon from 'material-ui-icons/Settings';
import MailIcon from 'material-ui-icons/Email';

import Show from '../show-if/show.jsx';
import NewProjectPopup from '../new-project-popup/new-project-popup.component.jsx';
import './project-drawer.style.scss';

class ProjectDrawer extends Component {
  render() {
    const menu = [
      { label: 'Project Page', icon: <HomeIcon /> },
      { label: 'Board',        icon: <DeveloperBoardIcon /> },
      { label: 'Settings',     icon: <SettingsIcon /> },
      { label: 'Chat',         icon: <MailIcon /> }
    ];

    const menuItem = (item, i) => (
      <div key={i} >
        <ListItem button style={{height: '50px', paddingLeft: '36px'}}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText style={{paddingLeft: 0}} primary={<span style={{fontWeight: 'bold'}}>{item.label}</span>} />
        </ListItem>

        <Show if={i === 0}> <Divider /> </Show>
      </div>
    );

    return (
      <Drawer open={true} docked={true} className="project-drawer">
        <div className="content" style={{paddingTop: '64px', width: '300px'}}>
          <List disablePadding>
            {menu.map((el, i) => menuItem(el, i))}
          </List>
        </div>
      </Drawer>
    );
  }
}

export default ProjectDrawer;
