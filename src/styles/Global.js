import { createGlobalStyle } from "styled-components";
import { font, type, color } from "./settings";
import typography from "./typography";

const Global = createGlobalStyle`
  @import url(
    'https://fonts.googleapis.com/css?family=Roboto:${font.weight},${font.bold}'
  );

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
    font-size: ${type.baseSize};
    font-family: ${font.sans}, sans-serif;
    font-weight: ${font.weight};
    color: ${color.type};
    background-color: ${color.background};
  }

  ${typography}

`;

export default Global;
