import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Card extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    text: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, cascade, reverse, review, personal, testimonial, blog, text, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      cascade && 'card-cascade',
      reverse && 'card-cascade reverse',
      review && 'card-review',
      blog && 'card-blog',
      personal && 'card-personal',
      testimonial && 'card-testimonial',
      text && text + '-text-color',
      className
    )

    return (
      <Tag {...attributes} className={classes} />
    )
  }

}

export default Card;
