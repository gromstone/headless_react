import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Card extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    color: PropTypes.string,
    border: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, cascade, wide, narrow, testimonial, personal, news, color, text, border, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      cascade && 'card-cascade',
      color && color,
      wide && 'card-cascade wide',
      narrow && 'card-cascade narrow',
      testimonial && 'card-testimonial',
      personal && 'card-personal',
      news && 'card-news',
      text && text + 'text',
      border && 'border-' + border,
      className
    )

    return (
      <Tag {...attributes} className={classes} />
    )
  }

}

export default Card;
