import React from "react";
import NavBar from "./layout/NavBar";
import {BrowserRouter as Router} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Pacifico&display=swap&subset=latin-ext" rel="stylesheet');

*,*::after,*::before{
  margin:0; 
  padding:0;
  box-sizing:border-box;
}
body{

  /* font-family: 'Pacifico', cursive; */
font-family: 'Montserrat', sans-serif;
font-size:10px;
}


`;
