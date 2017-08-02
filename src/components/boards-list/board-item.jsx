import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { LinearProgress } from 'material-ui/Progress';

const boardItemStyle = {marginBottom: 16, marginRight: 'auto', width: '46%', overflow: 'hidden'}
const memberAvatarStyle = {height: 32, width: 32, display: 'inline-block', marginRight: 8}
const moreStyles = {display: 'inline-block', verticalAlign: 'middle', marginTop: -12}
const linearProgressStyle = {height: 3}
const boardContainerStyle = {padding: 16}

const getMembersList = members => members.slice(0, 5).map((member, i) => <Avatar src={member.avatar} key={i} style={memberAvatarStyle}/>)

const paragraph = (label) => <Typography type="body1" component="p">{label}</Typography>

const headline = (label) => <Typography type="title" component="h3">{label}</Typography>

const more = (label) => <Typography type="body1" style={moreStyles} component="span" color="secondary">and <a style={{textDecoration: 'none', color: '#7984C6'}} href="javascript:;">more {label}</a></Typography>

const margin = (count) => <div style={{marginTop: count}}></div>

const count = (count, things) =>
  <div style={{display: 'inline-block', marginRight: 26}}>
    <Typography type="title" component="h3">{count}</Typography>
    <Typography type="body1" component="p" color="secondary">{things}</Typography>
  </div>

const BoardsItem = ({members, ...props}) =>
   <Paper style={boardItemStyle} elevation={1}>
     <div style={boardContainerStyle}>
       {margin(8)}
       {headline('Projector Frontend')}

       {margin(16)}
       {getMembersList(members || [])}
       {more(`${members.length - 5}`)}

       {margin(16)}
       {count(27, 'comments')}
       {count(18, 'tickets')}

       {margin(8)}
       {paragraph('The board, thar contents projector frontend tickets')}

       {margin(8)}
     </div>
     <LinearProgress style={linearProgressStyle} mode="determinate" value={16} />
   </Paper>


export default BoardsItem;
