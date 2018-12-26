import React from 'react'
import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';

import './book.css'

const storyWrap = story => <div style={{margin: 20}}>{story()}</div>

setOptions({
    name: 'Atom design',
    url: 'https://storybook.adb.com',
    showStoriesPanel: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    sortStoriesByKind: true
});

addDecorator( (story, context) => withInfo( {
  inline:true,
  header:false,
  source:true,
  maxPropsIntoLine: 1
}, context.kind)(story)(context) );
addDecorator(checkA11y)
addDecorator(storyWrap);
addDecorator(withKnobs);
setAddon(JSXAddon)

const req = require.context('../UI', true, /stories\.js$/);
function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(req);
}

configure(loadStories, module);
