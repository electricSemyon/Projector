import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui-icons/Home';
import DeveloperBoardIcon from 'material-ui-icons/DeveloperBoard';
import SettingsIcon from 'material-ui-icons/Settings';
import MailIcon from 'material-ui-icons/Email';

import Show from '../utils/show.jsx';
import './project-drawer.style.scss';

class ProjectDrawer extends Component {
  render() {
    const menu = [
      { label: 'Project Page', icon: <HomeIcon />,           route: '/home/project' },
      { label: 'Boards',       icon: <DeveloperBoardIcon />, route: '/home/boards'},
      { label: 'Settings',     icon: <SettingsIcon />,       route: '/home/settings'},
      { label: 'Chat',         icon: <MailIcon />,           route: '/home/chat'}
    ];

    const menuItem = (item, i) => (
      <div className="menu-item" key={i} >
        <Link to={item.route}>
          <ListItem button className="link">
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText style={{paddingLeft: 0}} primary={<span style={{fontWeight: 'bold'}}>{item.label}</span>} />
          </ListItem>
        </Link>

        <Show ifTrue={i === 0}>
          <Divider />
        </Show>
      </div>
    );

    return (
      <Drawer open={true} type="permanent" className="project-drawer">
        <div className="content">
          <List disablePadding>
            {menu.map(menuItem)}
          </List>
        </div>
      </Drawer>
    );
  }
}

export default ProjectDrawer;
