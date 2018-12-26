import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Manager } from 'react-popper';
import classNames from 'classnames';
import { omit, keyCodes } from '../../utils/utils';


class Dropdown extends Component {
  addEvents = this.addEvents.bind(this);
  handleDocumentClick = this.handleDocumentClick.bind(this);
  handleKeyDown = this.handleKeyDown.bind(this);
  removeEvents = this.removeEvents.bind(this);
  toggle = this.toggle.bind(this);

  static propTypes = {
    disabled: PropTypes.bool,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    group: PropTypes.bool,
    isOpen: PropTypes.bool,
    nav: PropTypes.bool,
    active: PropTypes.bool,
    addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
    size: PropTypes.string,
    tag: PropTypes.string,
    toggle: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    inNavbar: PropTypes.bool,
    setActiveFromChild: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    direction: 'down',
    nav: false,
    active: false,
    addonType: false,
    inNavbar: false,
    setActiveFromChild: false
  };

  static childContextTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    inNavbar: PropTypes.bool.isRequired,
  };

  getChildContext() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen,
      direction: (this.props.direction === 'down' && this.props.dropup) ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getContainer() {
    if (this._$container) return this._$container;
    this._$container = ReactDOM.findDOMNode(this);
    return ReactDOM.findDOMNode(this);
  }

  getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  }

  getMenuItems() {
    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
  }

  addEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
    const container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    if (
      /input|textarea/i.test(e.target.tagName)
      || (keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem')
    ) {
      return;
    }

    e.preventDefault();

    if (this.props.disabled) return;

    if (this.getMenuCtrl() === e.target) {
      if (
        !this.props.isOpen
        && ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1)
      ) {
        this.toggle(e);
        setTimeout(() => this.getMenuItems()[0].focus());
      }
    }

    if (this.props.isOpen && (e.target.getAttribute('role') === 'menuitem')) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if (
        [keyCodes.down, keyCodes.up].indexOf(e.which) > -1
        || ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
      ) {
        const $menuitems = this.getMenuItems();
        let index = $menuitems.indexOf(e.target);
        if (keyCodes.up === e.which || (keyCodes.p === e.which && e.ctrlKey)) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || (keyCodes.n === e.which && e.ctrlKey)) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }
        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[0].focus();
      } else if ((e.which >= 48) && (e.which <= 90)) {
        const $menuitems = this.getMenuItems();
        const charPressed = String.fromCharCode(e.which).toLowerCase();
        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();
          if (firstLetter === charPressed) {
            $menuitems[i].focus();
            break;
          }
        }
      }
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const {
      className,
      dropup,
      isOpen,
      group,
      size,
      nav,
      setActiveFromChild,
      active,
      addonType,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']);

    const direction = (this.props.direction === 'down' && dropup) ? 'up' : this.props.direction;

    attrs.tag = attrs.tag || (nav ? 'li' : 'div');

    let subItemIsActive = false;
    if (setActiveFromChild) {
      React.Children.map(this.props.children[1].props.children,
        (dropdownItem) => {
          if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
        }
      );
    }

    const classes = classNames(
      className,
      direction !== 'down' && `drop${direction}`,
      nav && active ? 'active' : false,
      setActiveFromChild && subItemIsActive ? 'active' : false,
      {
        [`input-group-${addonType}`]: addonType,
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group && !addonType,
        show: isOpen,
        'nav-item': nav
      }
    );

    return <Manager {...attrs} className={classes} onKeyDown={this.handleKeyDown} />;
  }
}

export default Dropdown;
