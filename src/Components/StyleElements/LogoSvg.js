import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class LogoSvg extends Component {

  static propTypes = {
    fill: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    path:PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    fill: '#000',
    width: "100%",
    path: "M150 0 L75 200 L225 200 Z"
    viewBox = "0 0 400 150"
  };

  render(){

    let {
      fill, style, width, height, path, viewBox, className, ...attributes
    } = this.props;

    const classes = classNames(
      'svg__icon',
      className
    )

    return (
      <svg
        {...attributes}
        style={style}
        height={height + 'px'}
        width={width}
        viewBox={viewBox}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path fill={fill} d={path} />
      </svg>
    )
  }

}

export default LogoSvg;
