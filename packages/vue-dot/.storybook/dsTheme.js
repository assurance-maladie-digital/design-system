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
  barTextColor: '#003463',
  barSelectedColor: '#003463',
  barBg: 'white',

  // Form colors
  inputBg: '#2d2d2d',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'Design System',
  brandUrl: 'https://digital-design-system.netlify.app',
});
