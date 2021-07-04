import { useTheme } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Navbar } from './components';
import Routes from './Routes';
import { ExtendedTheme } from './types';
import { generateDynamicStyleClasses } from './utils';

export default function App() {
  const theme = useTheme() as ExtendedTheme;
  const classes = generateDynamicStyleClasses();

  return <div className={`App ${theme.theme} ${classes.root}`} style={{ backgroundColor: theme.color.dark }}>
    <Navbar />
    <Routes />
  </div>
}
