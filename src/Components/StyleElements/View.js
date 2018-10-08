import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class View extends Component {
  state ={
    cursorPos:{}
  }

  static propTypes = {
    tag: PropTypes.string,
    zoom: PropTypes.bool,
    hover: PropTypes.bool,
    round: PropTypes.bool,
    cascade: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    tag: 'div'
  };

  handleClick(e){
    e.preventDefault()
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos});
  }

  render(){

    let {
      tag: Tag, src, zoom, hover, round, cascade, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'view',
      zoom && 'zoom',
      round && 'rounded',
      hover && 'overlay',
      cascade && 'view-cascade',
      className
    )

    let srcview;
    if(this.props.src){
      srcview = {
        backgroundImage:`url(${this.props.src})`,
        backgroundSize: 'cover',
        width: '100%',
        heigth: '100%'
      }
    }

    return(
      <Tag
        { ...attributes }
        className={ classes }
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) }
        style={ srcview }
      >
        { children }
      </Tag>
    );
  }

}

export default View;
