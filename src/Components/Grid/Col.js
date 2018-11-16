import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Col extends Component {

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    auto: PropTypes.bool,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    className:PropTypes.string
  };

  static defaultProps = {
    tag: 'div',
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  };

  render(){

    let {
      tag: Tag, auto, xs, sm, md, lg, xl, className, ...attributes
    } = this.props;

    const classes = classNames(
      'flex__col',
      auto ? 'flex__col-auto' : '',
      auto && xs ? 'flex__col-xs' : auto && sm ? 'flex__col-sm' : auto && md ? 'flex__col-md' : auto && lg ? 'flex__col-lg' : auto && xl ? 'flex__col-xl' : '',
      !auto && xs ? 'flex__col-xs-' + xs : '',
      !auto && sm ? 'flex__col-sm-' + sm : '',
      !auto && md ? 'flex__col-md-' + md : '',
      !auto && lg ? 'flex__col-lg-' + lg : '',
      !auto && xl ? 'flex__col-xl-' + xl : '',
      className
    )

    return(
      <Tag {...attributes} className={classes} />
    );
  }

}

export default Col;
