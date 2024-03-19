export type PropsRootTheme = { theme: PropsTheme };

export type WeightProps = 400 | 500 | 600 | 700 | 800;

type PropsPallete = {
  main: string;
  light?: string;
  dark?: string;
  text?: string;
};

export type PropsTheme = {
  name: string;
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
    [key: string]: PropsPallete | any;
    mode: string;
    common: {
      black: string;
      inherit: string;
      white: string;
    };
    primary: PropsPallete;
    secondary: PropsPallete;
    error: PropsPallete;
    warning: PropsPallete;
    info: PropsPallete;
    success: PropsPallete;
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
  animation: {
    transition: string[];
    hover: any[];
    active: string[];
  };
};

export type PropsBaseColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export type PropsBaseColorsOptions = 'light' | 'dark' | 'main' | 'text';

export type PropsWeight = 300 | 400 | 500 | 600 | 700 | 800;
