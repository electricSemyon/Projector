import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { LinearProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Show from '../utils/show.jsx';

import './boards-list.style.scss';

const More = ({label}) =>
  <Typography type="body1" component="span" color="secondary">
    and <a href="javascript:;">more {label}</a>
  </Typography>;

const Margin = ({height}) => <div style={{marginTop: height}}></div>;

const Count = ({count, things}) =>
  <div className="things-counter">
    <Typography type="title" component="h3">{count}</Typography>
    <Typography type="body1" component="p" color="secondary">{things}</Typography>
  </div>;

const BoardsItem = ({members = [], name, description, ...props}) =>
   <Paper className="board-item" elevation={2}>
     <div className="board-container">
       <Margin height={8}/>
       <a href="javascript:;"><Typography type="title" component="h3">{name}</Typography></a>

       <Margin height={16}/>
       {(members || []).slice(0, 5).map((member, i) => <Avatar src={member.avatar} key={i} className="member-avatar"/>)}

       <Show className="more-users" ifTrue={members.length > 5}>
         <More label={members.length - 5}/>
       </Show>

       <Margin height={16}/>
       <Count count={27} things="comments"/>
       <Count count={18} things="tickets"/>

       <Margin height={8}/>
       <Typography type="body1" component="p">{description}</Typography>

       <IconButton
         aria-label="More"
         aria-owns="long-menu"
         aria-haspopup="true"
         className="menu-button">
         <MoreVertIcon />
       </IconButton>
     </div>
     <LinearProgress className="board-progress" mode="determinate" value={16} />
   </Paper>;


export default BoardsItem;
