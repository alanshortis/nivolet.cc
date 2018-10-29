import React from "react";
import styled from "styled-components";
import { ReactComponent as NivoletLogo } from "../img/logo.svg";

const LogoStyle = styled(NivoletLogo)`
  height: 100%;
  path {
    fill: #efefef;
  }
`;

const Logo = () => <LogoStyle />;

export default Logo;
