import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Mask extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    overlay: PropTypes.string,
    pattern: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, overlay, pattern, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'mask',
      pattern && `patter-${pattern}`,
      overlay && `rgba-${overlay}`,
      className
    )

    return(
      <Tag {...attributes} className={classes}/>
    );
  }

}

export default Mask;
