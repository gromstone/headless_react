import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardFooter extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    small: PropTypes.bool,
    mute: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tag: 'p'
  };

  render(){

    let {
      tag: Tag, small, mute, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'card-text',
      mute && 'text-mute',
      className
    )

    const textcomponent = <Tag {...attributes} className={classes} />

    if(small){
      (<Tag {...attributes} className={classes}>
        <small>{ children }</small>
      </Tag>)
    }

    return textcomponent;
  }

}

export default CardFooter;
