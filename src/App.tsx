import {BrowserRouter as Router} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import React from 'react';
import NavBar from './layout/NavBar';
import {style1, style1Type} from './state/style/style1';

import Pages from './pages/Pages';

const App: React.FC = () => (
  <Router>
    <GlobalStyle styled={style1} />
    <NavBar />
    <main>
      <Pages />
    </main>
  </Router>
);

export default App;

const GlobalStyle = createGlobalStyle<style1Type>`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico&display=swap&subset=latin-ext" rel="stylesheet');

*,*::after,*::before{
  margin:0; 
  padding:0;
  box-sizing:border-box;
}
body{
overflow-x:hidden;
  /* font-family: 'Pacifico', cursive; */
font-family: 'Montserrat', sans-serif;
font-size:10px;


}

.activeLink {
    & > ol,li {
      color: ${props => props.styled.nav.navActive} !important;
    }
  }


img {
    width: auto;
    height: auto;

  }

 h2 {
    font-size:3.8em;
    font-weight: 400;
    letter-spacing:3px;
  }
 h3 {
    font-size:2em;
    font-weight: 400;
    letter-spacing:3px;
  }
p {
  font-size:1.2em;
  letter-spacing:1px;
  line-height: 3em;
}
a {
  text-decoration :none;
}


@media screen and (min-width:1000px) {
  h2 {
    font-size:5em;

  }
  h3 {
    font-size:2.5em;
 
  }
}
`;
