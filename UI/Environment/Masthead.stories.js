import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';

import { FlexContainer, Row } from '../../src/Components/FlexGrid';
import { Navbar, NavBrand, NavToggle, NavbarUl, NavLi } from '../../src/Components/NavElements';
import { HeaderHero, Collapse } from '../../src/Components/StyleElements';

storiesOf('Environment/Masthead', module)
  .add('Masthead', () =>
  <div>
    <FlexContainer fluid tag={'header'} className='header'>
      <Navbar>
        <NavToggle/>

        <NavBrand>
          Logo
        </NavBrand>
        <Collapse>
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
        </Collapse>

      </Navbar>

    </FlexContainer>
    <FlexContainer fluid tag={'main'}>
      <HeaderHero
        home
        bgcolor={'secondary'}
      />
    </FlexContainer>
  </div>
  );
