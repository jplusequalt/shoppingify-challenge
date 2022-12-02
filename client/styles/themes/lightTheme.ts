import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    accent: string;
    iconBg: string;
  }
  interface SimplePaletteColorOptions {
    accent?: string;
    iconBg?: string;
  }
  interface TypeBackground {
    accent: string;
    iconBg: string;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fafafe',
      paper: '#ffffff',
      accent: '#fff0de',
      iconBg: '#3f3d56'
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 700,
      laptop: 1024,
      desktop: 1200
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) =>`
        margin: 0,
        padding: 0
      `
    }
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif'
    ].join(',')
  }
});