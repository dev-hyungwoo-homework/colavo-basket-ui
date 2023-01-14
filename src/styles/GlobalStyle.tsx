import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
  }

  button {
    appearance: none;
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
