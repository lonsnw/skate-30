import styled from 'styled-components';

// MUI imports
import { createTheme } from '@mui/material/styles';
import "@fontsource/lato";

// Uses MUI to create a theme for the entire app
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#213345',
    },
    secondary: {
      main: '#97b3ce',
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
      fontColor: "primary",
      h1: {
        fontSize: 48,
        fontWeight: 300,
      },
      h2: {
        fontSize: 39,
        fontWeight: 300,
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

// Formats search bar to ensure contrast on Browse pages and keep consistent styling
export const CustomSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 6;
  background: #ECEBEB;
  border-radius: 4px;
  padding: 2px;
  margin: 0px 3px ;
  border: solid #A09B9D 1px;
  ;`

// Wraps main content of page and gives a gradient to ease from white nav bar to background color
export const MainWrap = styled.div`
  background: linear-gradient(0deg, #DCE6EF 54%, #ffffff 100%);
  border-radius: 0px;
  overflow-wrap: break-word;
  text-align: left;
  :`

// Wraps content with solid color and no border
export const SolidWrap = styled.div`
  background: #DCE6EF;
  border-radius: 0px;
  overflow-wrap: break-word;
  text-align: left;
  padding: 8px;
  :`

// Wraps and formats all scheduling cards for consistency and clarity
export const ItemCard = styled.div`
  border: 1px solid #7599BD;
  border-radius: 4px;
  overflow-wrap: break-word;
  text-align: left;
  padding: 8px;
  :`

// Wraps and formats all user info cards for consistency and clarity
export const UserCard = styled.div`
  border: 1px solid #7599BD;
  background: #EEF2F7;
  box-shadow: 0px 1px 1px 1px #B3AFB1;  
  border-radius: 4px;
  overflow-wrap: break-word;
  text-align: left;
  padding: 16px;
  :`

// Wraps and formats all other cards for consistency and clarity
export const InfoCard = styled.div`
  border: 1px solid #7599BD;
  box-shadow: 0px 1px 1px 1px #B3AFB1;  
  border-radius: 4px;
  overflow-wrap: break-word;
  text-align: left;
  padding: 8px;
  :`

/////////////////////////////////// Custom switch formatting ///////////////////////////////////
export const CustomLabel = styled.label`
display: flex;
align-items: center;
gap: 10px;
cursor: pointer;
`;

export const CustomSwitch = styled.div`
position: relative;
width: 60px;
height: 28px;
background: #b3b3b3;
border-radius: 32px;
padding: 4px;
transition: 300ms all;

&:before {
  transition: 300ms all;
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 35px;
  top: 50%;
  left: 4px;
  background: white;
  transform: translate(0, -50%);
}
`;

export const CustomInput = styled.input`
opacity: 0;
position: absolute;

&:checked + ${CustomSwitch} {
  background: #213345;

  &:before {
    transform: translate(32px, -50%);
  }
}
`;
////////////////////////////////////////////////////////////////////////////////////////////////