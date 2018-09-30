import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';


import Jumbotron from '../../src/Components/Jumbotron/Jumbotron';

storiesOf('Atom/Jumbotron', module)
  .add('jumbotron w/knobs', () =>
    <Jumbotron
      fluid={boolean("Active", false)}
      className={text("classes", '')}
      children={text("Text", 'There is a lot of text in here')}
    />
  )
