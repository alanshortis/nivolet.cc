import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default Reset;
