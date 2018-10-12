import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardContent extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    small: PropTypes.bool,
    mute: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    tag: 'p'
  };

  render(){

    let {
      tag: Tag, small, mute, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card-text',
      mute && 'text-mute',
      className
    )

    let textcomponent = <Tag {...attributes} className={classes}> { this.props.children } </Tag>

    if(small){
      textcomponent = (
        <Tag {...attributes} className={classes}>
          <small>{ this.props.children }</small>
        </Tag>)
    }

    return textcomponent;
  }

}

export default CardContent;
