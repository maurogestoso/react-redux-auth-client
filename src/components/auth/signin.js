import React, { PropTypes } from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import * as actions from '../../actions/index'

class Signin extends React.Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <Field
            name='email'
            component='input'
            type='email'
            className='form-control'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <Field
            name='password'
            component='input'
            type='password'
            className='form-control'/>
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary btn-ghost'>Sign in</button>
      </form>
    );
  }

  handleFormSubmit ({email, password}) {
    console.log(email, password);
    this.props.signinUser({email, password});
  }

  renderAlert () {
    return this.props.errorMessage ?
      (<div className='alert alert-error'>
        <strong>Oops!</strong> {this.props.errorMessage}
      </div>) : null;
  }
}

const SigninForm = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);

function mapStateToProps({auth}) {
  return {
    errorMessage: auth.error
  }
}

export default connect(mapStateToProps, actions)(SigninForm)
