import React, {Component} from 'react';
import Header from '../../containers/header.container.jsx';
import Typography from 'material-ui/Typography';
import ProjectDrawer from '../project-drawer/project-drawer.component.jsx';

import NewProjectPopup from '../../containers/new-project-popup.container.jsx';
import Show from '../show-if/show.jsx';
import './home.component.style.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProjectPopupOpened: false
    }

    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.setState({newProjectPopupOpened: false});
  }

  render() {
    return (
      <div className="home">
        <Header/>

        <Show if={this.props.projects}>
          <ProjectDrawer />
        </Show>

        <Show if={!this.props.projects}>
          <div className="no-active-projects-placeholder">
            <Typography color="secondary">
              Sorry, you have no active projects. You can <a href="javascript:;" onClick={() => this.setState({ newProjectPopupOpened: true })}>create one</a>.
            </Typography>
          </div>
        </Show>

        <NewProjectPopup requestClose={this.closePopup} open={this.state.newProjectPopupOpened} />
      </div>
    );
  }
}

export default Home;
