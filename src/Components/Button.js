import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import Icon from './Icon'

class Button extends Component {
  state ={
    cursorPos:{}
  }

  onClick = this.onClick.bind(this);

  static propTypes = {
    tag: PropTypes.string,
    active: PropTypes.bool,
    size: PropTypes.oneOf(['xs','sm','md','lg','md']),
    icon: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    gradient: PropTypes.string,
    role: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    float: PropTypes.bool,
    flat: PropTypes.bool,
    block: PropTypes.bool,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    color: 'default',
    tag: 'button',
    size: 'md'
  }

  handleClick(e){
    e.preventDefault()
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos});
  }

  onClick(e){
    if(this.props.disabled){
      e.preventDefault();
      return
    }
    if(this.props.onClick){
      this.props.onClick(e);
    }
  }

  render(){
    let { tag: Tag, active, size, icon, className, color, gradient, role, type, outline, rounded, circle, float, flat, block, social, action, innerRef, ...attributes } = this.props;

    const classes = classNames(
      size ? `btn--${size}` : false,
      rounded ? 'btn--round' : false,
      flat ? 'btn--flat' : gradient ? `${gradient}--gradient` : `btn${outline ? '-outline' : ''}--${color}`,
      float ? 'btn--float' : 'btn',
      circle ? 'btn--circle' : false,
      action ? 'btn--action' : false,
      social ? 'btn--'+social : false,
      block ? 'btn--block' : false,
      className,
      { active, disabled: this.props.disabled }
    )

    //type of element tag - will define if Anchor or Button tag
    if(attributes.href && Tag === 'button'){
      Tag = 'a';
    }

    return (
      <Tag
        type={ (Tag === 'button' && !type) ?  'button' : type }
        role={ (Tag === 'a' && !role) ?  'button' : role }
        className={ classes }
        ref={ innerRef }
        onClick={ this.onClick }
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) }
        { ...attributes }
      >
        { icon && <Icon icon={'home'}/> }
        { this.props.children }
      </Tag>
    )
  }
}

export default Button;
