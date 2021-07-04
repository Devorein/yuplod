import { makeStyles } from '@material-ui/core';
import { ExtendedTheme } from '../types';

export function generateDynamicStyleClasses() {
  return makeStyles((theme: ExtendedTheme) => ({
    root: {
      '& ::-webkit-scrollbar': {
        width: 10
      },
      '& ::-webkit-scrollbar-track': {
        backgroundColor: theme.color.dark
      },
      '& ::-webkit-scrollbar-thumb': {
        backgroundColor: theme.color.light
      },
      '& .bg-dark': {
        background: theme.color.dark
      },
      '& .bg-base': {
        background: theme.color.base
      },
      '& .bg-light': {
        background: theme.color.light
      },
      '& .bg-opposite_dark': {
        background: theme.color.opposite_dark
      },
      '& .bg-opposite_base': {
        background: theme.color.opposite_base
      },
      '& .bg-opposite_light': {
        background: theme.color.opposite_light
      },
      '& .color-primary': {
        color: theme.palette.text.primary
      },
      '& .color-secondary': {
        color: theme.palette.text.secondary
      }
    }
  }))();
}
