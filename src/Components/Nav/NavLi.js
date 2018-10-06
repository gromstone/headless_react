import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavLi extends Component {

  static propTypes = {
    tag: PropTypes.onOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.node,
    active: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'li'
  };

  render(){

    let {
      tag: Tag, active, text, children, className, ...attributes
    } = this.props;

    const classes = classNames(
      'nav__item',
      active ? 'active' : '',
      text ? 'navbar--text' : '',
      className
    )

    return(
      <Tag {...attributes} className={classes}> { children }</Tag>
    );
  }

}

export default NavLi;
