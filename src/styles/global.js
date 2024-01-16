import { createGlobalStyle } from 'styled-components';

// colores
const Colors = {
  primary: '#FEFCFB', //background
  secondary: '#FA7436', //acent
  tertiary: '#f4a079', // acent2
  text: '#222222', // texto
  textGray: '#666666',
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family: 'Poppins', Sans-Serif;
    color: ${Colors.text};
    background-color: ${Colors.primary};
    padding: 2em 0em;
    margin: 0 auto;
    overflow-x: hidden;
  }
`;




export { GlobalStyle, Colors };