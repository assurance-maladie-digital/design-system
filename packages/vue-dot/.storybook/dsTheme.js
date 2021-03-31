import { create } from '@storybook/theming';

export default create({
  base: 'light',
  colorPrimary: 'white',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: '#eee',
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#003463',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#003463',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Design System',
  brandUrl: 'https://example.com',
  brandImage: 'https://digital-design-system.netlify.app/assets/img/logo-am.25026cc3.svg',
});
