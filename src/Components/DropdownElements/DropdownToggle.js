import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Target } from 'react-popper';

//import Button from '../Button';

class DropdownToggle extends Component {

  onClick = this.onClick.bind(this);

  static propTypes = {
    caret: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    'aria-haspopup': PropTypes.bool,
    split: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    nav: PropTypes.bool,
  };

  static defaultProps = {
    'aria-haspopup': true,
  };

  static contextTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    inNavbar: PropTypes.bool.isRequired,
  };


  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  }

  render() {

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = 'button';
    } else {
      Tag = tag;
    }

    const { className, caret, split, nav, tag, ...props } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = classNames(
      Tag === "button" ? 'btn btn--flat' : '',
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }
    );
    const children = props.children || <span className="sr-only">{ariaLabel}</span>;

    if (this.context.inNavbar) {
      return (
        <Tag
          {...props}
          className={classes}
          onClick={this.onClick}
          aria-expanded={this.context.isOpen}
          children={children}
        />
      );
    }

    return (
      <Target
        {...props}
        className={classes}
        component={Tag}
        onClick={this.onClick}
        aria-expanded={this.context.isOpen}
        children={children}
      />
    );
  }
}

export default DropdownToggle;
