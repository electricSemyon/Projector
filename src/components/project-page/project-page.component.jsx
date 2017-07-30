import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import ProjectInfo from './project-info/project-info.component.jsx';

const styleSheet = createStyleSheet('Tabs', theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
}));

const tabStyle = {height: 61};

class ProjectTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;
    const tabsList = ['logs', 'info', 'members list', 'attachments'];

    const tab = (label, i) => <Tab key={i} label={label} style={tabStyle}/>;

    return (
      <div>
        <Paper className={classes.root}>
          <Tabs index={this.state.index} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
            {tabsList.map(tab)}
          </Tabs>
        </Paper>

        <div style={{padding: '30px'}}>
          {this.state.index === 0 && 'Item zero'}
          {this.state.index === 1 && <ProjectInfo latestProject={this.props.latestProject}/>}
        </div>
      </div>
    );
  }
}

export default withStyles(styleSheet)(ProjectTabs);