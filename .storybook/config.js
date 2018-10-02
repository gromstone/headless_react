import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

const req = require.context('../UI', true, /stories\.js$/);

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(req);
}

addDecorator( (story, context) => withInfo(context.kind)(story)(context) );
addDecorator(withKnobs);
setAddon(JSXAddon)

configure(loadStories, module);
