import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Spinner extends Component {

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    wrappedClasses: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    lg: false,
    md: false,
    sm: true,
  };

  render(){

    let {
      tag: Tag, color, children, size, className, ...attributes
    } = this.props;

    const wrappedClasses = classNames(
      'spinner-box',
      className
    );

    const classes = classNames(
      'sk-folding-cube',
      size ? `sk-folding-cube--${size}` : false,
      className
    )

    const spinner = (
        <div className={ classes }>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
    );

    return (
      <div { ...attributes } className={ wrappedClasses }>
        { spinner }
      </div>
    );
  }

}

export default Spinner;
