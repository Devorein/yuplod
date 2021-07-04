import { blue, grey } from '@material-ui/core/colors';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';
import { AllowedTheme, Color, ExtendedThemeOptions } from '../types';

export function generateTheme() {
  const color: Color = {
    base: '',
    dark: '',
    light: '',
    opposite_base: '',
    opposite_dark: '',
    opposite_light: ''
  };
  const text: {
    primary: string;
    secondary: string;
  } = {
    primary: '',
    secondary: ''
  };

  let paletteType: AllowedTheme = 'dark';
  let theme = localStorage.getItem('yuplod.theme') as AllowedTheme;
  if (theme !== 'dark' && theme !== 'light') {
    theme = 'dark';
  }

  switch (theme) {
    case 'dark': {
      color.light = grey[800];
      color.dark = grey[900];
      color.base = darken(grey[800], 0.25);
      color.opposite_light = lighten(grey[200], 0.5);
      color.opposite_dark = grey[300];
      color.opposite_base = grey[200];
      text.primary = grey[200];
      text.secondary = grey[300];
      paletteType = 'dark';
      break;
    }
    case 'light': {
      color.light = lighten(grey[200], 0.5);
      color.dark = grey[300];
      color.base = grey[200];
      color.opposite_light = grey[800];
      color.opposite_dark = grey[900];
      color.opposite_base = darken(grey[800], 0.25);
      text.primary = grey[900];
      text.secondary = grey[800];

      paletteType = 'light';
      break;
    }
  }

  console.log(theme, text);

  const themeOptions: ExtendedThemeOptions = {
    theme,
    palette: {
      type: paletteType,
      text: {
        primary: text.primary,
        secondary: text.secondary
      },
      primary: {
        main: blue[700]
      },
      background: {
        default: color.base
      }
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 14
    },
    color,
    overrides: {
      MuiButton: {
        root: {
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5
        }
      },
      MuiTab: {
        wrapper: {
          fontWeight: 'bold',
          fontSize: 16,
          textTransform: 'none'
        }
      },
      MuiCheckbox: {
        root: {
          padding: 0,
          marginRight: 5,
          '& .MuiSvgIcon-root': {
            height: 30,
            width: 30
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 5
        }
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          padding: 10
        },
        label: {
          flex: 1
        }
      },
      MuiFormControl: {
        root: {
          margin: 5
        }
      },
      MuiTypography: {
        root: {
          color: text.primary
        }
      },
      MuiFormLabel: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          padding: 5,
          display: 'flex'
        }
      },
      MuiInputBase: {
        input: {
          paddingLeft: 25,
          paddingTop: 15,
          paddingBottom: 15
        }
      }
    }
  };

  return createMuiTheme(themeOptions);
}
