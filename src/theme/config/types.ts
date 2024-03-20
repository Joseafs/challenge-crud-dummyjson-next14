/* eslint-disable typescript-sort-keys/interface */
export type PropsRootTheme = { theme: PropsTheme };

export type PropsThemePaletteKeys = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
interface PropsThemeColorTypes {
  main: string;
  light?: string;
  dark?: string;
  text?: string;
}

export type PropsThemeColorTypesKeys = keyof PropsThemeColorTypes;

interface PropsFontSizes {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  titleSmall: string;
  titleLarge: string;
  inherit: string;
}

export type PropsFontSizesKeys = keyof PropsFontSizes;

export type PropsTheme = {
  name: string;

  animation: {
    transition: string[];
    hover: any[];
    active: string[];
  };
  breakpoints: {
    keys: string[];
    width: {
      [key: string]: string;
      desktop: string;
      tablet: string;
      mobile: string;
    };
    values: {
      [key: string]: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  palette: {
    common: {
      black: string;
      inherit: string;
      white: string;
    };
    primary: PropsThemeColorTypes;
    secondary: PropsThemeColorTypes;
    error: PropsThemeColorTypes;
    warning: PropsThemeColorTypes;
    info: PropsThemeColorTypes;
    success: PropsThemeColorTypes;
    grey: {
      [key: string]: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    background: {
      default: string;
      divider: string;
    };
  };
  shape: {
    radius: number;
  };
  space: number;
  shadows: string[];
  zindex: {
    screen: number;
    appBar: number;
    modal: number;
    tooltip: number;
    snackbar: number;
    menu: number;
  };

  fontSizes: PropsFontSizes;
  fontLineHeights: PropsFontSizes;
  fontWeights: {
    bold: string;
    extraBold: string;
    extraLight: string;
    light: string;
    medium: string;
    normal: string;
    semiBold: string;
    thin: string;
  };
};
