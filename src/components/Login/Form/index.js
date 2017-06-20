import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import './style.scss';
import InputField from '../../InputField';

const emailValidator = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { login: '', password: '' };
    console.log(props)

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLoginChange(event, value) {
    this.setState({ login: value });
  }

  handlePasswordChange(event, value) {
    this.setState({ password: value });
  }

  validateLogin(value) {
    if(!value)
      return { valid: false, message: 'Email should not be empty' }
    else if (!emailValidator.test(value))
      return { valid: false, message: 'Email should be valid' }
    else
      return { valid: true };
  }

  validatePassword(value) {
    if(!value)
      return {valid: false, message: 'Password should not be empty'}
    else if(value.length < 4)
      return {valid: false, message: 'Password should be at list of 4 characters'}
    else
      return {valid: true}
  }

  handleLogin() {
    this.props.login({
      email: this.state.login,
      password: this.state.password
    })
  }

  render() {
    return (
      <div className="login-card">
        <header>
          <h2 className="login-title">Login</h2>
        </header>

        <form className="login-form" action="">
          <InputField name="login"
                      type="text"
                      hintText="Enter your email"
                      floatingLabelText="Email"
                      fullWidth={true}
                      onChange={this.handleLoginChange}
                      validate={this.validateLogin}
          />
          <InputField name="password"
                      type="password"
                      hintText="Enter your password"
                      floatingLabelText="Password"
                      fullWidth={true}
                      onChange={this.handlePasswordChange}
                      validate={this.validatePassword}
          />

          <FlatButton label="Forgot your password?" primary={true} />

          <RaisedButton label="LOG IN"
                        className="login-button"
                        fullWidth={true}
                        primary={true}
                        onClick={this.handleLogin}/>

          <RaisedButton label="LOG IN WITH GOOGLE"
                        className="login-with-facebook"
                        fullWidth={true}
                        backgroundColor="#db4437"
                        labelColor="#fff"
                        href="/auth/google"/>

          <FlatButton label="SIGN UP"
                      className="sign-up-button"
                      containerElement={<Link to="/signup"/>}
                      fullWidth={true} />
        </form>
      </div>
    );
  }
}
//346139765186-df3o3rmrif4h59jbi5alb29ca4as9ig5.apps.googleusercontent.com
export default LoginForm;
