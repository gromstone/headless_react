import { withInfo } from '@storybook/addon-info';
const wInfoStyle = {
  header: {
    h1: {
      display: 'inline',
      marginRight:'20px'
    },
    h2: {
      display: 'inline',
      color: '#999'
    },
    body: {
      padding: '0 auto'
    },
  },
  infoBody: { padding: '0 5px'}
};

export const wInfo = text => withInfo({inline: true, source: false, styles: wInfoStyle, text: text})
