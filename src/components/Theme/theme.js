import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5280ad',
      light: '#97b3ce',
      dark: '#213345',
    },
    secondary: {
      main: '#ad5280',
      light: '#ce97b3',
      dark: '#452133',
    },
    error: {
      main: '#d22d2f',
      light: '#e48182',
      dark: '#541213',
    },
    warning: {
      main: '#ad7f52',
      dark: '#574029',
      light: '#bd9975',
    },
    info: {
      main: '#5252ad',
      light: '#9797ce',
      dark: '#313168',
    },
    success: {
      main: '#80ad52',
      light: '#b3ce97',
      dark: '#334521',
    },
    background: {
      default: '#eef2f7',
      paper: '#dce6ef',
    },
    typography: {
        fontFamily: "'Lato', sans-serif",
        h1: {
          fontSize: 48,
          fontWeight: 600,
        },
        h2: {
          fontSize: 39,
          fontWeight: 500,
        },
        h3: {
          fontSize: 33,
        },
        h4: {
          fontSize: 28,
        },
        h5: {
          fontSize: 23,
        },
        h6: {
          fontSize: 20,
        },
        subtitle1: {
          fontSize: 18,
        },
        subtitle2: {
          fontSize: 16,
        },
        body1: {
          fontSize: 14,
        },
        body2: {
          fontSize: 12,
        },
        button: {
          fontSize: 14,
          fontWeight: 600,
        },
        caption: {
          fontSize: 12,
        },
        overline: {
          fontSize: 12,
          lineHeight: 1.8,
        },
      },
      spacing: (factor) => `${0.5 * factor}rem`,
      shape: {
        borderRadius: 4,
      },
      props: {
        MuiButton: {
          size: 'small',
        },
        MuiButtonGroup: {
          size: 'small',
        },
        MuiCheckbox: {
          size: 'small',
        },
        MuiFab: {
          size: 'small',
        },
        MuiFormControl: {
          margin: 'dense',
          size: 'small',
        },
        MuiFormHelperText: {
          margin: 'dense',
        },
        MuiIconButton: {
          size: 'small',
        },
        MuiInputBase: {
          margin: 'dense',
        },
        MuiInputLabel: {
          margin: 'dense',
        },
        MuiRadio: {
          size: 'small',
        },
        MuiSwitch: {
          size: 'small',
        },
        MuiTextField: {
          margin: 'dense',
          size: 'small',
        },
        MuiList: {
          dense: true,
        },
        MuiMenuItem: {
          dense: true,
        },
        MuiTable: {
          size: 'small',
        },
      },
  },
});