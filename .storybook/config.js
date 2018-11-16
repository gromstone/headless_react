import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { withInfo , setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';

const req = require.context('../UI', true, /stories\.js$/);

setOptions({
    name: 'Atom design',
    url: 'https://storybook.adb.com',
    showStoriesPanel: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    sortStoriesByKind: true
});

setDefaults({
    source: true,
    styles: stylesheet => {
        stylesheet.infoBody = {
            infoBody: {
                padding: '10px'
            }
        };
        return stylesheet;
    },
    maxPropsIntoLine: 1
});
addDecorator( (story, context) => withInfo(context.kind)(story)(context) );
addDecorator(withKnobs);
setAddon(JSXAddon)

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(req);
}

configure(loadStories, module);
