import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Spinner extends Component {

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm','md','lg']),
    type: PropTypes.string,
    wrappedclasses: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    lg: null,
    md: null,
    sm: null,
    type: 'circle'
  };

  render(){

    let {
      tag: Tag, color, children, size, type, className, ...attributes
    } = this.props;

    const wrappedclasses = classNames(
      'spinner-box',
      className
    );

    const classes = classNames(
      (type === 'cube') ? `sk-folding-${type}` : '',
      (type === 'circle') ? `sk-fading-${type}` : '',
      (type === 'cube' && size) ? `sk-folding-cube--${size}` : (type === 'circle' && size) ? `sk-fading-circle--${size}` : '',
      className
    )

    const spinnerCircle = (
      <div className={ classes }>
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
    );

    const spinnerSquare = (
        <div className={ classes }>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
    );

    return (
      <div { ...attributes } className={ wrappedclasses }>
        { (type === 'cube') ? spinnerSquare : (type === 'circle') ? spinnerCircle : null }
      </div>
    );
  }

}

export default Spinner;
