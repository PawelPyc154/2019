import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import About from './about/About';
import Menu from './menu/Menu';
import Reservations from './reservations/Reservations';
import Blog from './blog/Blog';
import Shop from './shop/Shop';

const Home = lazy(() => import('./home/Home'));
const Contact = lazy(() => import('./contact/Contact'));

export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/reservations" exact component={Reservations} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/shop" exact component={Shop} />
  </Switch>
);

export default Pages;
