import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavbarUl extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.node,
    left: PropTypes.bool,
    right: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'ul',
  };

  render(){

    let {
      tag: Tag, left, right, children, className, ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-nav',
      left ? 'ml-auto' : '',
      right ? 'mr-auto' : '',
      'justify-content',
      className
    )

    return(
      <Tag {...attributes} className={classes}> { children }</Tag>
    );
  }

}

export default NavbarUl;
