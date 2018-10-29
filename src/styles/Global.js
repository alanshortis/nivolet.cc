import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family: ${font.sans};
    src: url(${FuturaWoff2}) format('woff2'), url(${FuturaWoff}) format('woff');
    font-weight: ${font.weight};
    font-style: normal;
  }


  * {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    border: 0;
    padding: 0;
    margin: 0;
    &:focus {
      outline: 0;
    }
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  img {
    display: inline-block;
    vertical-align: middle;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    box-sizing: border-box;
  }
`;

export default Global;
