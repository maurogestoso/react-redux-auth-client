import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Feature extends React.Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render () {
    return (
      <div>{this.props.message}</div>
    );
  }
}

function mapStateToProps ({auth}) {
  return {
    message: auth.message
  }
}

export default connect(mapStateToProps, actions)(Feature);
