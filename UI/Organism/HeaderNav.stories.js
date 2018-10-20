import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Navbar, NavBrand, NavToggle, NavbarUl, NavLi } from '../../src/Components/NavElements';

storiesOf('Organism/Navigation', module)
  .add('Navigation', () =>
      <Navbar >
        <NavToggle/>
        <NavBrand>
          Logo
        </NavBrand>
        <NavbarUl left>
          <NavLi>
            <a className="nav__link btn--flat" href="/"><i className=" fa fa-home "></i> Home</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/about">About</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/blog"><i className=" fa fa-comment "></i> Blog</a>
          </NavLi>
          <NavLi>
            <a className="nav__link btn--flat" href="/contact"><i className=" fa fa-envelope "></i>Contact</a>
          </NavLi>
        </NavbarUl>
      </Navbar>
  );
