import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Spinner } from '../../src/Components/StyleElements';

storiesOf('Atom/Spinner', module)
  .add('Spinner w/knobs', () =>
    <Spinner
      size={select("Size",['sm','md','lg'], 'sm')}
      type={select("Type",['circle','cube'], 'cube')}
      wrappedclasses={text("Wrapper Classes", '')}
      className={text("Classes", '')}
    />
  )
