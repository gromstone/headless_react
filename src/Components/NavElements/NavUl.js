import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavUl extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    color: PropTypes.string,
    children: PropTypes.node,
    tabs: PropTypes.bool,
    altTabs: PropTypes.bool,
    pills: PropTypes.bool,
    header: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'ul',
    altTabs: false,
    tabs: false,
    pills: false,
    header: false
  };

  render(){

    let {
      tag: Tag, altTabs, tabs, color, children, pills, header, className, ...attributes
    } = this.props;

    const classes = classNames(
      'nav',
      tabs && 'nav__tabs',
      pills && 'nav__pills',
      header && 'nav__pills card__header__pills',
      pills && color ? 'pill--' + color : false,
      (tabs || altTabs) && color ? 'tabs--' + this.props.color : false,
      className
    )

    return(
      <Tag { ...attributes } className={ classes }> { children }</Tag>
    );
  }

}

export default NavUl;
