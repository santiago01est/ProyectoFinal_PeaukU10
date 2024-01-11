import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// colores
const Colors = {
  primary: 'white', //background
  secondary: '#FA7436', //acent
  tertiary: '#C000F0', // acent2
  text: 'black', // texto
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family: 'Poppins', Sans-Serif;
    color: ${Colors.text};
    height: 100vh;
    background-color: ${Colors.primary};
    padding: 2em 0em;
    margin: 0 auto;
  }
`;

export { GlobalStyle, Colors };