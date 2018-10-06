import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Navbar, NavbarUl, NavLi } from '../../src/Components/Nav';

storiesOf('Molecules/Navbar', module)
  .add('Navbar', () =>
      <Navbar >
        <NavbarUl>
          <NavLi>
            <a href="/">Home</a>
          </NavLi>
          <NavLi>
            <a href="/about">{text('Link name','about')}</a>
          </NavLi>
          <NavLi>
            <a href="/blog">Blog</a>
          </NavLi>
        </NavbarUl>
      </Navbar>
  );
