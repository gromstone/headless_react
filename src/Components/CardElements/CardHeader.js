import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardHeader extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    color: PropTypes.string,
    text: PropTypes.string,
    border: PropTypes.string,
    transparent: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, color, text, border, transparent, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card-header',
      color && color,
      text && text,
      (color && !text) && 'white-text',
      border && 'border-' + border,
      transparent && 'transparent-bg'
      className
    )

    return(
      <Tag {...attributes} className={classes} />
    );
  }

}

export default CardHeader;
