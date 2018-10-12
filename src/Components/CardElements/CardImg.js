import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import { Mask, View } from '../StyleElements';


class CardImg extends Component {
  state = {
    cusorPos: {}
  }

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'img',
    hover: false,
    overlay: 'white-gleam'
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
      tag: Tag, overlay, top, hover, className, ...attributes
    } = this.props;

    const classes = classNames(
      top && 'card-img--top',
      className
    )

    let imgcomponent = <Tag {...attributes} className={classes} />

    if( this.props.src ){
      imgcomponent = (
        <View hover={this.props.hover}>
          <div className={classes} onMouseDown={this.handleClick.bind(this)} onTouchStart={this.handleClick.bind(this)}>
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
