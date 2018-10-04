import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Badge extends Component {

  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
    pill: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'span',
    color: null,
    pill: null,
  };

  render(){

    let {
      tag: Tag, color, children, pill, className, ...attributes
    } = this.props;

    const classes = classNames(
      'badge',
      color,
      'badge--'+color,
      pill ? 'badge--pill' : '',
      className
    )

    return(
      <Tag {...attributes} className={classes}> { this.props.children }</Tag>
    );
  }

}

export default Badge;
