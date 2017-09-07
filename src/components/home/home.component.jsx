import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import ProjectDrawer from '../project-drawer/project-drawer.component.jsx';
import Grid from 'material-ui/Grid';

import NewProjectPopup from '../new-project-popup/new-project-popup.container.jsx';
import Show from '../utils/show.jsx';
import LoadingSpinner from './loading-spinner.component.jsx';

import './home.component.style.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { newProjectPopupOpened: false, isLoaded: false };

    this.closePopup = this.closePopup.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  closePopup() {
    this.setState({newProjectPopupOpened: false});
  }

  toggleLoading(isLoaded) {
    this.setState({isLoaded});
  }

  componentWillMount() {
    this.props.getUser()
      .then(() => this.props.getProjectsList())
      .then(() => this.props.getLatestProject())
      .then((res) => {
        this.toggleLoading(true)
      })
      .catch(err => console.log(err));
  }

  render() {
    const projectsList = this.props.projects.list;

    return (
      <Grid item xs={12} className="home">
        <Show ifTrue={projectsList && projectsList.length}>
          <ProjectDrawer />

          <div className="home-main">
            <Show ifTrue={this.state.isLoaded}>
              {this.props.children}
            </Show>
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
        <LoadingSpinner isLoading={!this.state.isLoaded}/>
      </Grid>
    );
  }
}

export default Home;
