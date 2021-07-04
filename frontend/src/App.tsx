import { useTheme } from '@material-ui/core';
import React, { ReactNode } from 'react';
import './App.css';
import { Navbar } from './components';
import { ExtendedTheme } from './types';
import { generateDynamicStyleClasses } from './utils';

interface Props {
  children: ReactNode | ReactNode[]
}

export default function App(props: Props) {
  const theme = useTheme() as ExtendedTheme;
  const classes = generateDynamicStyleClasses();

  return <div className={`App ${theme.theme} ${classes.root}`} style={{ backgroundColor: theme.color.dark }}>
    <Navbar />
    {props.children}
  </div>
}
