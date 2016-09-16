import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {
  render () {
    return (
      <header>
        <Link to='/'>Redux Auth</Link>
        <nav>
          {this.renderLinks()}
        </nav>
      </header>
    );
  }

  renderLinks () {
    if (this.props.authenticated) {
      return <Link id='logo' className='btn btn-error btn-ghost' to='/signout'>Signout</Link>;
    } else {
      return [
        <Link className='btn btn-success btn-ghost' to='/signin'>Signin</Link>,
        <Link className='btn btn-primary btn-ghost' to='/signup'>Signup</Link>
      ]
    }
  }
}

function mapStateToProps({auth}) {
  return {
    authenticated: auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
