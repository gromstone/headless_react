import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Flipper extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    innerTag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    flipped: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    tag: 'div',
    innerTag: 'div',
    flipped: false
  };

  render(){

    let {
      tag: Tag, innerTag: InnerTag, flipped, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card--rotate effect--click',
      this.props.flipped && 'flipped',
      className
    )

    return (
      <Tag {...attributes} className="card__wrapper">
        <InnerTag className={classes}>
          { this.props.children }
        </InnerTag>
      </Tag>
    )
  }

}

export default Flipper;
