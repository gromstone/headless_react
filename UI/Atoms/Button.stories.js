import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/Components/Button';

storiesOf('Atom/Button', module)
  .add('Button w/knobs', () =>
    <Button
      active={boolean("Active", false)}
      size={select("Size",['sm','md','lg','default'], 'md')}
      className={text("Classes", '')}
      color={select("Color",['primary','success','secondary','info','danger', 'optional', 'default'], 'primary')}
      gradient={text("Gradient", '')}
      role={text("Role", 'button')}
      type={text("Type", 'button')}
      href={text("href", '')}
      disabled={boolean("Disabled", false)}
      outline={boolean("Outline", false)}
      rounded={boolean("Rounded", false)}
      circle={boolean("Circle", false)}
      float={boolean("Float", false)}
      flat={boolean("Flat", false)}
      block={boolean("Block", false)}
      onClick={action('clicked')}
      children={text("Label", 'Click')}
      onClick={action('clicked')}
    />
  )
