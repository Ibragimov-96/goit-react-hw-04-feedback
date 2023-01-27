import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Sections extends Component {
  render() {
    return(<><h2>{this.props.title}</h2>{this.props.children}</>)
    
  }
}
export default Sections;
Sections.propTypes={
    title: PropTypes.string,
}