import React from "react";
import NavBar from "./layout/NavBar";
import {BrowserRouter as Router} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {style1, style1Type} from "./state/style/style1";
import Pages from "./pages/Pages";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle styled={style1} />
      <NavBar />
      <main>
        <Pages />
      </main>
    </Router>
  );
};

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


`;
