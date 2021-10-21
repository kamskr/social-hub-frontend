import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from 'theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

export const renderWithProviders = (children: ReactNode) => {
  return render(
    <Router>
      <ThemeProvider theme={theme}>
        <QueryParamProvider ReactRouterRoute={Route}>{children}</QueryParamProvider>
      </ThemeProvider>
    </Router>,
  );
};
