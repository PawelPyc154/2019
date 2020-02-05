import { BrowserRouter as Router } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import NavBar from './layout/navbar/NavBar';

import Pages from './pages/Pages';
import './App.scss';
import { loadProducts } from './state/BasketOfProducts/action';
// const Footer = lazy(() => import('./layout/Footer'));

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts(JSON.parse(localStorage.getItem('basket') || '[]')));
  }, []);

  return (
    <Suspense fallback={<>loading...</>}>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <main>
          <Pages />
        </main>
      </Router>
    </Suspense>
  );
};
//
export default App;
