import { BrowserRouter as Router } from 'react-router-dom';

import React, { Suspense } from 'react';
import NavBar from './layout/navbar/NavBar';

import Pages from './pages/Pages';
import './App.scss';
// const Footer = lazy(() => import('./layout/Footer'));

const App: React.FC = () => (
  <Suspense fallback={<>loading...</>}>
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <main>
        <Pages />
      </main>
      {/* <Footer /> */}
    </Router>
  </Suspense>
);
//
export default App;
