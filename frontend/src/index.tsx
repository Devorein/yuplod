import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.scss';
import { generateTheme } from './utils';

const Root = () => {
  const generatedTheme = generateTheme();
  return <ThemeProvider theme={generatedTheme}>
    <App />
  </ThemeProvider>
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);