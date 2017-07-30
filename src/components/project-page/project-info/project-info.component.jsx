import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.latestProject;

    return (
      <div className="project-info">
        <Typography type="title">{project.title}</Typography>
        <Typography>{this.props.latestProject.description}</Typography>
      </div>
    );
  }
}

export default ProjectInfo;
