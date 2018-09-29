import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import '../src/index.scss';

const req = require.context('../UI', true, /stories\.js$/);

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(req);
}

addDecorator(withKnobs);
addDecorator( (story, context) => withInfo(context.kind)(story)(context) );


configure(loadStories, module);
