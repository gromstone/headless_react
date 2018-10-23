import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavToggle extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    tag: 'button',
    type: 'button'
  };

  render(){

    let {
      tag: Tag, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'navbar-toggle',
      className
    )

    return(
      <Tag {...attributes} className={classes}>
        { children || <i className="fa fa-reorder "></i> }
      </Tag>
    );
  }

}

export default NavToggle;
