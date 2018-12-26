import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Badge from '../../src/Components/Badge';

storiesOf('Atom/Badge', module)
  .add('Badge w/knobs', () =>
    <Badge
      color={select("Color",['primary','success','secondary','info','danger', 'optional', 'default'], 'default')}
      pill={boolean("Pill", false)}
      className={text("Classes", '')}
      children={text("Text", 'I bring action')}
    />
  )
