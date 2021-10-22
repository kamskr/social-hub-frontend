export interface Theme {
  colors: {
    primary: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    background: string;
    foreground: string;
    textPrimary: string;
    textSecondary: string;
    error: string;
  };
  fontSizes: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    subtitle1: string;
    subtitle2: string;
    body1: string;
    body2: string;
    button: string;
    caption: string;
    overline: string;
  };
  fontWeight: {
    regular: number;
    semiBold: number;
    bold: number;
  };
  breakpoints: {
    tablet: string;
    desktop: string;
  };
  radius: {
    regular: string;
  };
  spacing: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
}
