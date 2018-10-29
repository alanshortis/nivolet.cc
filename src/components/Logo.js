import React from "react";
import styled from "styled-components";
import { ReactComponent as NivoletLogo } from "../img/logo.svg";

const LogoStyle = styled(NivoletLogo)`
  height: 1.5rem;
  path {
    fill: #4b4d4e;
  }
`;

const Logo = () => <LogoStyle />;

export default Logo;
