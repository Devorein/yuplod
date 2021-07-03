import { grey } from '@material-ui/core/colors';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';
import { Color, ExtendedThemeOptions } from '../types';

export function generateTheme() {
  const color: Color = {
    base: grey[200],
    dark: grey[300],
    light: lighten(grey[200], 0.5),
    opposite_base: darken(grey[800], 0.25),
    opposite_dark: grey[900],
    opposite_light: grey[800]
  };
  const text: {
    primary: string;
    secondary: string;
  } = {
    primary: grey[900],
    secondary: grey[800]
  };

  color.light = lighten(grey[200], 0.5);
  color.dark = grey[300];
  color.base = grey[200];
  color.opposite_light = grey[800];
  color.opposite_dark = grey[900];
  color.opposite_base = darken(grey[800], 0.25);
  text.primary = grey[900];
  text.secondary = grey[700];
  const paletteType = 'light';

  const themeOptions: ExtendedThemeOptions = {
    palette: {
      type: paletteType,
      text: {
        primary: text.primary,
        secondary: text.secondary
      },
      background: {
        default: color.base
      },
      primary: {
        main: grey[900]
      }
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 14,
      h5: {
        fontWeight: 'bold',
        fontSize: '1.25em'
      },
      h6: {
        fontWeight: 'bold',
        fontSize: '1.15em'
      }
    },
    color,
    overrides: {
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
      MuiButton: {
        outlined: {
          borderRadius: 10
        },
        root: {
          paddingTop: 15,
          paddingBottom: 15
        }
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 10
        },
        input: {
          paddingLeft: 25,
          paddingTop: 15,
          paddingBottom: 15
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
