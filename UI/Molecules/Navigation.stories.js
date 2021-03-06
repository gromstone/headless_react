import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Navbar, NavToggle, NavbarUl, NavLi } from '../../src/Components/Nav';

storiesOf('Molecules/Navbar', module)
  .add('Navigation list', () =>
      <Navbar >
        <NavbarUl left>
          <NavLi>
            <a className="nav__link btn--flat" href="/">Home</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/about">{text('Link name','About')}</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/blog">Blog</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/contact">Contact</a>
          </NavLi>
        </NavbarUl>
      </Navbar>
  );
