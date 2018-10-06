import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class NavList extends Component {
  state = {
    isCollapsed: false
  }

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    color: PropTypes.string,
    scrolling: PropTypes.bool,
    scrollingNavbarOffset: PropTypes.number,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    tag: 'nav',
    expand: false,
    scrolling: false
  };

  componentDidMount(){
    if(this.props.scrolling || this.props.scrollingNavbarOffset){
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  componentWillMount(){
    if(this.props.scrolling || this.props.scrollingNavbarOffset){
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  handleScroll(){
    const scrollingNavbarOffset = this.props.scrollingNavbarOffset || 50;
    if( window.pageYOffset > scrollingNavbarOffset){
      this.setState({isCollapsed: true});
    } else {
      this.setState({isCollapsed: false});
    }
  }

  render(){

    const getExpandClass = (expand) => {
      if(expand === false) {
        return false;
      } else if (expand === true || expand === 'sm'){
        return 'nav-bar--expand'
      }

      return `nav-bar--expand${expand}`
    }

    this.refs = {};

    let {
      tag: Tag, scrolling, scrollingNavbarOffset, double, expand, color, fixed, sticky, light, dark, className, ...attributes
    } = this.props;

    const classes = classNames(
      'navbar',
      color ? color : '',
      double ? 'double-nav' : '',
      light ? 'navbar--light' : '',
      dark ? 'navbar--dark' : '',
      sticky ? 'sticky--' + sticky : '',
      fixed ? 'fixed--' + fixed : '',
      getExpandClass(expand),
      (scrolling || scrollingNavbarOffset) ? 'scrolling-navbar' : '',
      this.state.isCollapsed ? 'top-nav-collapse' : '',
      className
    )

    return(
      <Tag {...attributes} className={classes} role="navigation" />
    );
  }

}

export default NavList;
