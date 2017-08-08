import React from 'react';
import Header from '../header/header.container.jsx';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router';

import Input from '../input-field/validating-input.component.jsx';
import margin from '../utils/margin.component.jsx';
import validate from '../../utils/validate';
import './login.style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <div>
        <Grid container gutter={0} justify="center">
          <Grid className="ribbon" item xs={12} style={{'height': '200px', 'backgroundColor': '#5C6BC0', 'zIndex': -1}}></Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} style={{'padding': '20px', 'marginTop': '-50px'}}>
              <form onSubmit={this.handleLogin}>
                <Typography type="headline" component="h2"> LOGIN </Typography>
                {margin(24)}

                <Input label="Email" type="email" fullWidth={true}
                       handleChange={value => this.setState({email: value})}
                       validate={value => validate('email', value)}/>
                {margin(16)}

                <Input label="Password" type="password" fullWidth={true}
                       handleChange={value => this.setState({password: value})}
                       validate={value => validate('password', value)}/>
                {margin(16)}

                <div className="login-buttons-container" style={{'textAlign': 'right'}}>
                  <Link to="/signup" >
                    <Button style={{margin: '16px'}}> SIGN UP </Button>
                  </Link>
                  <Button type="submit" color="primary" raised style={{'marginTop': '16px'}}> LOG IN </Button>
                </div>

                <div className="login-with-services" style={{display: 'flex', 'justifyContent': 'space-between'}}>
                  <Button raised style={{width: '45%'}}>
                    LOG IN WITH GOOGLE
                  </Button>
                  <Button raised style={{width: '45%'}}>
                    LOG IN WITH GITHUB
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
