import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouteWrapper } from 'routes/RouteWrapper';
import { Feed } from 'views/Feed';
import { GlobalProviders } from 'providers/GlobalProviders';
import { RoutePath } from 'routes/routes.types';
import { NotFound } from './NotFound';

export const Root = () => (
  <Router>
    <GlobalProviders>
      <Switch>
        <RouteWrapper exact path={RoutePath.feed} component={Feed} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </GlobalProviders>
  </Router>
);
