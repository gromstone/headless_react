import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';


import Aux from '../../src/hoc/aux';
import { Jumbotron } from '../../src/Components/StyleElements';

storiesOf('Atom/Jumbotron', module)
  .add('jumbotron w/knobs', () =>
    <Jumbotron
      fluid={boolean("Active", false)}
      className={text("classes", '')}
      children={
        <Aux>
          <h1>{text("Title", 'The Great')}</h1>
          <p>{text("Text", 'The Great Depression was a severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries it started in 1929 and lasted until the late-1930s.[1] It was the longest, deepest, and most widespread depression of the 20th century.[2] In the 21st century, the Great Depression is commonly used as an example of how far the world\'s economy can decline.[3]')}</p>
        </Aux>
      }
        />
  )
