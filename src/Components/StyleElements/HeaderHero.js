import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class HeaderHero extends Component {

  static propTypes = {
    src: PropTypes.string,
    bgcolor: PropTypes.string,
    home: PropTypes.bool,
    blog: PropTypes.bool,
    contact: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    bgcolor: ''
  }

  render(){

    let { src, bgcolor, home, blog, contact, className, ...attributes } = this.props;
    const classes = classNames(
      'hero',
      bgcolor && `hero--${bgcolor}`,
      home ? 'hero--home' : blog ? 'hero--blog' : contact ? 'hero--contact' : '',
      className
    )

    return (
      <div className="header-hero">
        <div { ...attributes } className={ classes }>
          { (src && blog) ? <img className="hero--img" src={src} alt="hero img" /> : null }
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default HeaderHero;
