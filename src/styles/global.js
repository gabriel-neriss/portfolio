import { createGlobalStyle } from "styled-components"; // IMPORTANDO GlobalStyle DA BIBLIOTECA

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  
  }

  body {

    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    outline: none;
  }


  a {

    text-decoration: none;
    color:inherit
    
  }

  ul, li {
    
    list-style:none;

  }



`