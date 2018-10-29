import { createGlobalStyle } from "styled-components";
import { font, type, measurements } from "./settings";

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
    color: #17191a;
    background-color: #eeeeee;
  }

  h1 {
    font-weight: ${font.bold};
    text-transform: uppercase;
    margin-bottom: calc(${measurements.contentMargin} / 4);
  }

  p {
    margin-bottom: ${measurements.contentMargin};
  }

  a {
    color: #dd6969;
    text-decoration: none;
  }

  strong {
    font-weight: ${font.bold};
  }
`;

export default Global;
