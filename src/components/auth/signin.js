import React, { PropTypes } from 'react'
import {reduxForm, Field} from 'redux-form'

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
        <button action='submit' className='btn btn-primary btn-ghost'>Sign in</button>
      </form>
    );
  }

  handleFormSubmit ({email, password}) {
    console.log(email, password);
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
