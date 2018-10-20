import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { HeaderHero } from '../../src/Components/StyleElements';


storiesOf('Atom/HeaderHero', module)
  .add('HeaderHero w/knobs', () =>
    <HeaderHero
      home={boolean("home hero", true)}
      blog={boolean("blog hero", false)}
      contact={boolean("contact hero", false)}
      src={text("Center Image", 'https://via.placeholder.com/600x300')}
      className={text("classes", '')}
      bgcolor={select("Color",['primary','success','secondary','info','danger', 'optional', 'default'], 'primary')}
    />
  )
