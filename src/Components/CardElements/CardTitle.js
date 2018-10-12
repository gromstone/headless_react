import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardTitle extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    sub: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'h4',
    sub: false
  };

  render(){

    let {
      tag: Tag, sub, className, ...attributes
    } = this.props;

    const classes = classNames(
      sub ? 'card-subtitle': 'card-title',
      className
    )

    return(
      <Tag {...attributes} className={classes} />
    );
  }

}

export default CardTitle;
