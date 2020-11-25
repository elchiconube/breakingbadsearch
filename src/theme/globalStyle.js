import { createGlobalStyle } from "styled-components";
import montserratBold from "./../fonts/Montserrat-Bold.ttf";
import montserratLight from "./../fonts/Montserrat-Light.ttf";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
     font-family: 'Montserrat-Light';
     src: url(${montserratLight});
  }

  @font-face {
     font-family: 'Montserrat-Bold';
     src: url(${montserratBold});
  }

  html {
    font-family: 'Montserrat-Light', Arial, Helvetica, sans-serif;
  }

  body {
    color: ${({ theme }) => theme.global.fontColor};
    font-size: ${({ theme }) => theme.global.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 22px;
  }

  a{
    text-decoration: none;

  }

  strong {
    font-family: 'Montserrat-Bold', Arial, Helvetica, sans-serif;
  }

  img{ 
    max-width: 100%;
    display: block;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }


  button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    cursor: pointer;

    &:disabled{
      cursor: default;
    }
  }
`;

export default GlobalStyle;
