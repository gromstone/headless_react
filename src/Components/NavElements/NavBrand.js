import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavBrand extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    tag: 'a',
  };

  render(){

    let {
      tag: Tag, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-brand',
      className
    )

    return(
      <Tag {...attributes} className={classes}> { children }</Tag>
    );
  }

}

export default NavBrand;
