import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { GlobalStyle, theme } from 'theme';
import { RouteWrapper } from 'routes/RouteWrapper';
import { Feed } from 'views/Feed';
import { NotFound } from './NotFound';

export const Root = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <RouteWrapper exact path="/" component={Feed} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </QueryParamProvider>
  </Router>
);
