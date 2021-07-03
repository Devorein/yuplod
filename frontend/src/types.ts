import { Theme, ThemeOptions } from '@material-ui/core';

export type Color = {
  dark: string;
  base: string;
  light: string;
  opposite_dark: string;
  opposite_base: string;
  opposite_light: string;
};

export interface ExtendedThemeOptions extends ThemeOptions {
  color: Color;
}

export interface ExtendedTheme extends Theme {
  color: Color;
}
