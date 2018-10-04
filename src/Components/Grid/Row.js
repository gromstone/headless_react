import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Row extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className:PropTypes.string
  };

  static defaultProps = {
    tag: 'div',
  };

  render(){
    const {
      tag: Tag, className, ...attributes
    } = this.props;

    const classes = classNames(
      'flex__row',
      className
    )

    return(
      <Tag {...attributes} className={classes} />
    );
  }

}

export default Row;
