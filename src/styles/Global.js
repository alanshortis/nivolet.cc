import { createGlobalStyle } from "styled-components";
import { font } from "./settings";
import { NowayWoff } from "../fonts/Noway-Light.woff";
import { NowayWoff2 } from "../fonts/Noway-Light.woff2";
import { NowayRegularWoff } from "../fonts/Noway-Regular.woff";
import { NowayRegularWoff2 } from "../fonts/Noway-Regular.woff2";

const Global = createGlobalStyle`
  @font-face {
    font-family: ${font.sans};
    src: url(${NowayWoff}) format('woff2'), url(${NowayWoff2}) format('woff');
    font-weight: ${font.weight};
    font-style: normal;
  }

  @font-face {
    font-family: ${font.sans};
    src: url(${NowayRegularWoff}) format('woff2'), url(${NowayRegularWoff2}) format('woff');
    font-weight: ${font.weightBold};
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
    font-family: ${font.sans};
    font-weight: ${font.weight};
  }
`;

export default Global;
