import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Jumbotron extends Component {

  static propTypes = {
    fluid:PropTypes.bool,
    children:PropTypes.node,
    className:PropTypes.string,
  }

  static defaultProps = {
    fluid: false 
  }

  render(){
    let closeBtn;

    const {className, fluid, children, ...attributes} = this.props;
    const classes = classNames('jumbotron', fluid ? 'jumbotron--fluid' : false, className,)

    return(
      <div { ...attributes } className={classes}> { children } </div>
    );
  }
}

export default Jumbotron;
