import React, {Component} from 'react';
import { Route } from 'react-router';
import Typography from 'material-ui/Typography';
import ProjectDrawer from '../project-drawer/project-drawer.component.jsx';
import ProjectPage from '../project-page/project-page.container.jsx';
import Grid from 'material-ui/Grid';

import NewProjectPopup from '../new-project-popup/new-project-popup.container.jsx';
import Show from '../utils/show.jsx';
import './home.component.style.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { newProjectPopupOpened: false };

    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.setState({newProjectPopupOpened: false});
  }

  render() {
    const projectsList = this.props.projects.list;
    console.log(projectsList)

    return (
      <Grid item xs={12} className="home">
        <Show ifTrue={projectsList && projectsList.length}>
          <ProjectDrawer />

          <div className="home-main">
            {this.props.children}
          </div>
        </Show>

        <Show ifTrue={!projectsList || (projectsList && !projectsList.length)}>
          <div className="no-active-projects-placeholder">
            <Typography color="secondary">
              Sorry, you have no active projects. You can <a href="javascript:;" onClick={() => this.setState({ newProjectPopupOpened: true })}>create one</a>.
            </Typography>
          </div>
        </Show>

        <NewProjectPopup requestClose={this.closePopup} open={this.state.newProjectPopupOpened} />
      </Grid>
    );
  }
}

export default Home;
