import { withInfo } from '@storybook/addon-info';
const wInfoStyle = {
  header: {
    h1: {},
    h2: {},
    body: {},
  },
  infoBody: {}
};

export const wInfo = text => withInfo({inline: true, source: false, styles: wInfoStyle, text: text})
