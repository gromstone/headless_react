import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from '../../src/Components/Dropdown';

class Example extends React.Component {
  toggle = this.toggle.bind(this);
  state = {
    dropdownOpen: false
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          { this.props.children }
        </Dropdown>


      </div>
    );
  }
}

storiesOf('Organism/Dropdown', module)
  .add('Dropdown', () =>
    <Example>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>

    </Example>
  );
