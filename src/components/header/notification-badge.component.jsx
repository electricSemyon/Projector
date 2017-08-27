import React, {Component} from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui-icons/Notifications';
import IconButton from 'material-ui/IconButton';

const MessagesBadge = ({count, color = 'accent', ...props}) => (

  count ? <IconButton disableRipple onClick={props.onClick} {...props}>
            <Badge badgeContent={count} color={color}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        : <IconButton disableRipple onClick={props.onClick} {...props}>
            <NotificationsIcon />
          </IconButton>
);

export default MessagesBadge;
