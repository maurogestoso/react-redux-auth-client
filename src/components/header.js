import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render () {
    return (
      <nav id='header'>
        <h1>Redux Auth</h1>
        <Link className='btn btn-success btn-ghost' to='/signin'>Signin</Link>
      </nav>
    )
  }
}

export default Header;
