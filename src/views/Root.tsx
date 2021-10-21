import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { GlobalStyle, theme } from 'theme';
import { NotFound } from './NotFound';

// eslint-disable-next-line no-console
console.log('test');
export const Root = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </QueryParamProvider>
  </Router>
);
