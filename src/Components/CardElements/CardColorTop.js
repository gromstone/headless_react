import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardColorTop extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, color, gradient, className, ...attributes
    } = this.props;

    const classes = classNames(
      'car-top',
      color && color + '--color',
      gradient && gradient + '--gradient',
      className
    )

    return(
      <Tag {...attributes} className={classes}/>
    );
  }

}

export default CardColorTop;
