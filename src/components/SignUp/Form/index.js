import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.scss';
import InputField from '../../InputField';

const emailValidator = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { login: '',
      password: '',
      passwordConfirm: '',
      username: '',
      captchaToken: '',
      isFormValid: false
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () => window.grecaptcha.render('google-captcha', {
        sitekey: '6LcVDiYUAAAAALi5IdQ-WPYfVd9afQJXvZsH8loU',
        callback: (res) => this.setState({ captchaToken: res })
    }), 300);
  }

  handleLoginChange(event, value) {
    this.setState({ login: value });
  }

  handleUsernameChange(event, value) {
    this.setState({ username: value });
  }

  handlePasswordChange(event, value) {
    this.setState({ password: value });
  }

  handleConfirmPasswordChange(event, value) {
    this.setState({ passwordConfirm: value });
  }

  validateLogin(value) {
    let isValid = false;

    if(!value)
      return { valid: false, message: 'Email should not be empty' }
    else if (!emailValidator.test(value))
      return { valid: false, message: 'Email should be valid' }
    else {
      isValid = true;
      return {valid: true};
    }

    this.setState({ isFormValid: isValid });
  }

  validatePassword(value) {
    let isValid = false;

    if(!value)
      return {valid: false, message: 'Password should not be empty'}

    else if(value.length < 6)
      return {valid: false, message: 'Password should be at list of 6 characters'}

    else {
      isValid = true;
      return {valid: true};
    }

    this.setState({ isFormValid: isValid });
  }

  validatePasswordConfirmation(value) {
    let isValid = false;

    if(this.state.password !== this.state.passwordConfirm)
      return {valid: false, message: 'Passwords should be the same'}

    else {
      isValid = true;
      return {valid: true}
    }

    this.setState({ isFormValid: isValid });
  }

  handleSignUp() {
    this.props.signUp({
      name: this.state.username,
      email: this.state.login,
      password: this.state.password,
      token: this.state.captchaToken
    });
  }

  render() {
    return (
      <div className="signup-card">
        <header>
          <h2 className="signup-title">Sign up</h2>
        </header>

        <form className="login-form" action="">
          <InputField name="email"
                      type="text"
                      hintText="Enter your email"
                      floatingLabelText="Email"
                      fullWidth={true}
                      onChange={this.handleLoginChange}
                      validate={this.validateLogin}
          />

          <InputField name="username"
                      type="text"
                      hintText="Enter your nickname"
                      floatingLabelText="Username"
                      fullWidth={true}
                      onChange={this.handleUsernameChange}
          />

          <InputField name="password"
                      type="password"
                      hintText="Enter your password"
                      floatingLabelText="Password"
                      fullWidth={true}
                      onChange={this.handlePasswordChange}
                      validate={this.validatePassword}
          />

          <InputField name="confirm-password"
                      type="password"
                      hintText="Confirm your password"
                      floatingLabelText="Confirm password"
                      fullWidth={true}
                      onChange={this.handleConfirmPasswordChange}
                      validate={this.validatePasswordConfirmation}
          />

          <div id="google-captcha"></div>

          <RaisedButton label="SIGN UP"
                        className="login-button"
                        fullWidth={true}
                        primary={true}
                        onClick={this.handleSignUp}
                        disabled={!this.state.isFormValid}/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
