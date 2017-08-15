import React, {Component} from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import Typography from 'material-ui/Typography';

import MemberInviteMenu from './member-invite.component.jsx';

class MembersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInviteMenuOpen: false,
      abbButtonAnchor: null
    };

    this.toggleInviteMenu = this.toggleInviteMenu.bind(this);
  }

  toggleInviteMenu(e) {
    this.setState({isInviteMenuOpen: !this.state.isInviteMenuOpen, abbButtonAnchor: e ? e.target : this.state.abbButtonAnchor})
  }

  render() {
    const members = this.props.members || [];

    const Member = ({email, name, avatar, ...props}, key) =>
      <ListItem button key={key}>
        <Avatar src={avatar} title={name}/>
        <ListItemText primary={<Typography style={{fontWeight: '500'}}>{email}</Typography>}
                      secondary={name}/>
      </ListItem>;

    return (
      <div>
        <List>
          {members.map(Member)}
        </List>

        <Button fab color="primary" onClick={this.toggleInviteMenu} style={{position: 'absolute', bottom: 16, right: 16}}>
          <PersonAddIcon />
        </Button>

        <MemberInviteMenu isOpen={this.state.isInviteMenuOpen}
                          anchor={this.state.abbButtonAnchor}
                          onRequestClose={() => this.toggleInviteMenu()}
                          currentUser={this.props.currentUser}
                          sendInvites={this.props.sendInvites}
                          projectId={this.props.projectId}/>
      </div>
    );
  }
}

export default MembersList;
