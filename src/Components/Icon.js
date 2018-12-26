import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Icon extends Component {

  static propTypes = {
    /** Required for icon use. See font-awesome for icon list*/
    icon: PropTypes.string.isRequired,
    list: PropTypes.bool,
    fixed: PropTypes.bool,
    className: PropTypes.string,
  }

  render(){
    let { icon, list, className, fixed, ...attributes } = this.props;

    const classes = classNames(
      'fa',
      icon ? `fa-${icon}` : '',
      list ? 'fa--li' : '',
      fixed ? 'fa--fw' : '',
      className,
    )

    return (
      <i {...attributes} className={classes}></i>
    )
  }
}

export default Icon;
