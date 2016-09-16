import React, { Component, PropTypes } from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import * as actions from '../../actions/index'

const renderField = ({ input, label, type, meta: {touched, error} }) => (
  <fieldset className="form-group">
    <label>{label}</label>
    <input {...input} type={type} className='form-control'/>
    {touched && error && <span className="alert-error">(!) {error}</span>}
  </fieldset>
);

class Signup extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field label='Email:' name='email' type='email' component={renderField}/>
        <Field label='Password:' name='password' type='password' component={renderField}/>
        <Field label='Confirm:' name='passwordConfirm' type='password' component={renderField}/>
        {this.renderAlert()}
        <button className="btn btn-primary btn-ghost">Signup</button>
      </form>
    );
  }
  handleFormSubmit ({email, password}) {
    this.props.signupUser({email, password});
  }
  renderAlert () {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-error">{this.props.errorMessage}</div>
      );
    }
  }
}

function validate ({email, password, passwordConfirm}) {
  const errors = {};
  if (!email) {
    errors.email = 'Please enter an email';
  }
  if (!password) {
    errors.password = 'Please enter a password';
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  if (password !== passwordConfirm) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

const SignupForm = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);

function mapStateToProps({auth}) {
  return {
    errorMessage: auth.error
  }
}

export default connect(mapStateToProps, actions)(SignupForm)
