import 'styled-components';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}