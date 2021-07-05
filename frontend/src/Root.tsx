import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import { RootContext } from './contexts';
import './index.scss';
import { IUser } from './types';
import { createClient, generateTheme } from './utils';

const client = createClient()
export default function Root() {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const generatedTheme = generateTheme();
  return <ThemeProvider theme={generatedTheme}>
    <QueryClientProvider client={client}>
      <RootContext.Provider value={{ currentUser, setCurrentUser }}>
        <ReactQueryDevtools />
        <App />
      </RootContext.Provider>
    </QueryClientProvider>
  </ThemeProvider >
}