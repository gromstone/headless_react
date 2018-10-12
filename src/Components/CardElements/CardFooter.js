import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardFooter extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    color: PropTypes.string,
    text: PropTypes.string,
    border: PropTypes.string,
    small: PropTypes.bool,
    mute: PropTypes.bool,
    transparent: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, color, text, border, small, mute, transparent, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card-footer',
      color && color,
      text && text,
      (color && !text) && 'white-text',
      border && 'border-' + border,
      mute && 'text-mute',
      transparent && 'transparent-bg',
      className
    )

    let footercomponent = <Tag {...attributes} className={classes}> { this.props.children }</Tag>

    if(small){
      footercomponent = (
        <Tag {...attributes} className={classes}>
          <small>{ this.props.children }</small>
        </Tag>)
    }

    return footercomponent;
  }

}

export default CardFooter;
