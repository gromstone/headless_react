import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Navbar, NavToggle, NavbarUl, NavLi } from '../../src/Components/Nav';
import Button from '../../src/Components/Button';

storiesOf('Molecules/Navbar', module)
  .add('Side Nav', () =>
    <div className="side-nav">
      <Navbar >
        <NavbarUl>
          <NavLi>
            <Button className="nav__link" flat href={"/"} icon={'home'}><span>Home</span></Button>
          </NavLi>
          <NavLi>
            <Button className="nav__link" flat href={"/"} icon={''}><span>Home</span></Button>
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

    </div>
  );
