import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./home/Home'));
const About = lazy(() => import('./about/About'));
const Menu = lazy(() => import('./menu/Menu'));
const Reservations = lazy(() => import('./reservations/Reservations'));
const Blog = lazy(() => import('./blog/Blog'));
const Shop = lazy(() => import('./shop/Shop'));
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
