import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html,body {
    font-family: 'Roboto',sans-serif;
    width: 100%;
    height:100%;
  }

  #root {
    height:100%;
    width:100%;
  }
`;
