import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Navbar from '../../src/Components/Navbar';

storiesOf('Organism/Navigation', module)
  .add('Navigation', () =>
      <Navbar >
        <a href="/">Home</a>
        <a href="/about">{text('Link name','about')}</a>
        <a href="/blog">Blog</a>
      </Navbar>
  );
