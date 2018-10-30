import React from "react";
import styled from "styled-components";
import { color } from "../styles/settings";
import { ReactComponent as NivoletLogo } from "../img/logo.svg";

const LogoStyle = styled(NivoletLogo)`
  height: 100%;
  max-height: 1.5rem;
  path {
    fill: ${color.typeLight};
  }
`;

const Logo = () => <LogoStyle />;

export default Logo;
