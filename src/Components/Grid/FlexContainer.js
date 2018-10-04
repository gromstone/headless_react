import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class FlexContainer extends Component {

  static propTypes = {
    tag: PropTypes.string,
    fluid: PropTypes.bool,
    className:PropTypes.string
  };

  static defaultProps = {
    tag: 'div',
    fluid: false
  };

  render(){

    let {
      tag: Tag, fluid, className, ...attributes
    } = this.props;

    const classes = classNames(
      fluid ? 'flex__container-fluid' : 'flex__container',
      className
    )

    return(
      <Tag {...attributes} className={classes} />
    );
  }

}

export default FlexContainer;
