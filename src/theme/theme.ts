import { Theme } from 'theme/Theme.types';

export const theme: Theme = {
  colors: {
    primary: '#0070FF',
    accent1: '#6CC607',
    accent2: '#AF5DDF',
    accent3: '#02B8FF',
    accent4: '#FF94D8',
    background: '#FAFAFB',
    foreground: '#fff',
    textPrimary: '#3A3A4A',
    textSecondary: '#9F9FA9',
    error: '#FF4D56',
  },
  fontSizes: {
    h1: '96px',
    h2: '60px',
    h3: '48px',
    h4: '34px',
    h5: '24px',
    h6: '20px',
    subtitle1: '16px',
    subtitle2: '14px',
    body1: '16px',
    body2: '14px',
    button: '14px',
    caption: '12px',
    overline: '10px',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  breakpoints: {
    tablet: '760px',
    desktop: '1084px',
  },
  radius: {
    regular: '7px',
  },
  spacing: {
    xs: '45px',
    s: '45px',
    m: '45px',
    l: '45px',
    xl: '45px',
  },
};
