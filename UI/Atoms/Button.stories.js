import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';


import Button from '../../src/Components/Button/Button';

storiesOf('Atom/Button', module)
  .add('Button w/knobs', () =>
    <Button
      active={boolean("Active", false)}
      size={select("Size",['xs','sm','md','lg','tb'], 'md')}
      className={text("classes", '')}
      color={select("Color",['primary','success','secondary','info','danger'], 'default')}
      gradient={text("Gradient", '')}
      role={text("Role", '')}
      type={text("Type", '')}
      disabled={boolean("Disabled", false)}
      outline={boolean("Outline", false)}
      rounded={boolean("Rounded", false)}
      circle={boolean("Circle", false)}
      float={boolean("Float", false)}
      flat={boolean("Flat", false)}
      block={boolean("Block", false)}
      onClick={action('clicked')}
      children={text("Label", 'Click')}
    />
  )
