import { css } from "styled-components";
import { font, measurements } from "./settings";

const typography = css`
  h2 {
    font-size: 1.25rem;
    font-weight: ${font.bold};
    margin-bottom: calc(${measurements.contentMargin} / 4);
  }

  h3 {
    font-size: 1rem;
  }

  p,
  ol {
    &:not(:last-of-type),
    &:only-of-type {
      margin-bottom: ${measurements.contentMargin};
    }
  }

  ol li {
    margin-left: ${measurements.contentMargin};
    list-style: disc;
  }

  a {
    color: #dd6969;
    text-decoration: none;
  }

  strong {
    font-weight: ${font.bold};
  }
`;

export default typography;
