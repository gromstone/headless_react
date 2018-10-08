import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import Mask from '../StyleElements/Mask';
import View from '../StyleElements/View';

class CardImg extends Component {
  state = {
    cusorPos: {}
  }

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    cascade: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'img',
    hover: false,
    cascade: false,
    overlay: 'light-white'
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
      tag: Tag, overlay, top, hover, cascade, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card-img-top',
      className
    )

    const imgcomponent = <Tag {...attributes} className={classes} />

    if( this.props.src ){
      return (
        <View hover={this.props.hover} cascade={this.props.cascade}>
          <div className="" onMouseDown={this.handleClick.bind(this)} onTouchStart={this.handleClick.bind(this)}>
            { imgcomponent }
            <Mask overlay={overlay}/>
          </div>
        </View>
      )
    }

    return(
      <div>
        { imgcomponent }
      </div>
     );
  }

}

export default CardImg;
