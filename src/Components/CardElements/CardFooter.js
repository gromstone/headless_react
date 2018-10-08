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
    children: PropTypes.node
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, color, text, border, small, mute, transparent, className, children, ...attributes
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

    const component = <Tag {...attributes} className={classes} />

    if(small){
      (<Tag {...attributes} className={classes}>
        <small>{ children }</small>
      </Tag>)
    }

    return component;
  }

}

export default CardFooter;
