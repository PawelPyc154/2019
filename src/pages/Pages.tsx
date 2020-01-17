import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import About from './about/About';

const Home = lazy(() => import('./home/Home'));
const Contact = lazy(() => import('./contact/Contact'));

export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

export default Pages;
