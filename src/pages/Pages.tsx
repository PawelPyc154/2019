import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import About from './About';

const Home = lazy(() => import('./home/Home'));
export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
  </Switch>
);

export default Pages;