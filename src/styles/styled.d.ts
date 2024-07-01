import 'styled-components';

interface Theme {
  colors: {
    gold: string;
    secondary: string;
    background: string;
    text: string;
    textGold:string
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  textSize:{
    mini:string,
    small:string,
    medium:string,
    large:string,
},
  fonts:{
    CrimsonText:string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}