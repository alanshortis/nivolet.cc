import { css } from "styled-components";
import { font, measurements } from "./settings";

const typography = css`
  h2 {
    font-size: 1.25rem;
    font-weight: ${font.bold};
    text-transform: uppercase;
    margin-bottom: calc(${measurements.contentMargin} / 4);
  }

  h3 {
    font-size: 1rem;
  }

  p {
    &:not(:last-of-type) {
      margin-bottom: ${measurements.contentMargin};
    }
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
