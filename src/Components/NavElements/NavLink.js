import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const Link = require('react-router-dom').NavLink;

class NavLink extends Component {
  state = {
    cursorPos:{}
  };

  clickHandler = this.clickHandler.bind(this);

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
  }

  clickHandler(e){
    if(!this.props.disabled){
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      }


      this.setState({ cursorPos: cursorPos});
      if(this.props.onClick){
        this.props.onClick(e)
      }

    e.stopPropagatino();
    }
  }


  render(){
    let { active, className, to, disabled, children, ...attributes } = this.props;

    const classes = classNames(
      'nav__link',
      disabled ? 'disabled' : '',
      active && 'active',
      className
    );

    return (
      <Link
        className={ classes }
        onClick={ this.clickHandler }
        to={ this.props.to }
        { ...attributes }
      >
        { children }
      </Link>
    )
  }
}

export default NavLink;
