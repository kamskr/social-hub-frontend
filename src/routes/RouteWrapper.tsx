import React, { ComponentType, ReactNode } from 'react';
import { Layout } from 'layout';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: ComponentType<any>;
  [x: string]: any;
}

export const RouteWrapper = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
