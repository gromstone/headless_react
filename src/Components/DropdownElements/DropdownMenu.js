import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';

const noFlipModifier = { flip: { enabled: false } };

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom',
};

const DropdownMenu = (props, context) => {

  const { className, cssModule, right, tag, flip, modifiers, persist, ...attrs } = props;
  const classes = classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      show: context.isOpen,
    }
  );

  let Tag = tag;

  if (persist || (context.isOpen && !context.inNavbar)) {
    Tag = Popper;

    const position1 = directionPositionMap[context.direction] || 'bottom';
    const position2 = right ? 'end' : 'start';
    attrs.placement = `${position1}-${position2}`;
    attrs.component = tag;
    attrs.modifiers = !flip ? {
      ...modifiers,
      ...noFlipModifier,
    } : modifiers;
  }

  return (
    <Tag
      tabIndex="-1"
      role="menu"
      {...attrs}
      aria-hidden={!context.isOpen}
      className={classes}
      x-placement={attrs.placement}
    />
  );
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  tag: 'div',
  flip: true,
};

DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: PropTypes.bool.isRequired,
};

export default DropdownMenu;
