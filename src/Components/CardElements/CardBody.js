import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class CardBody extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    cascade: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'div'
  };

  render(){

    let {
      tag: Tag, cascade, className, ...attributes
    } = this.props;

    const classes = classNames(
      'card-body',
      cascade && 'card-body--cascade',
      className
    )

    return(
      <Tag {...attributes} className={classes}/>
    );
  }

}

export default CardBody;
