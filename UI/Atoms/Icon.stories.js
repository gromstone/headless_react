import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Icon from '../../src/Components/Icon';
import Icons from './Icon/iconList';

storiesOf('Atom/Icon', module)
  .add('Icon List', () =>
    <Icons />
  )
  .add('Icon w/knobs', () =>
    <Icon
      icon={text("Icon", 'home')}
      list={boolean("List", false)}
      fixed={boolean("Fixed", false)}
      className={text("Classes", '')}
    />
  )
