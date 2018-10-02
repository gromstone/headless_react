import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../src/utils/withInfo';

import '../src/scss/index.scss';

storiesOf('Welcome', module).addWithJSX(
  'Design style guide',
  wInfo(`
    ### Notes
    Here we'll add the steps, processes and guidelines of the project

    ### Usage
    ~~~ js
    <div>Div Sample</div>
    ~~~

    ### To use Storybook

    Explore panels on the left
  `)( () => <div>Sample Div</div>)
);
