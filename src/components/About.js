import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { measurements } from "../styles/settings";

const AboutSection = styled.section`
  width: 100%;
  max-width: 40rem;
  padding: ${measurements.contentMargin};
`;

const About = () => (
  <>
    <Helmet>
      <title>Nivolet &middot; About</title>
    </Helmet>
    <AboutSection>
      <h2>What is this?</h2>
      <p>
        Nivolet is currently nothing more than a list of notable cycling climbs
        that have been completed by <a href="https://short.is">Alan Shortis</a>.
        It's probably not particularly interesting to anyone else.
      </p>
      <p>
        Eventually, Nivolet aims to become a large and detailed catalogue of
        lesser known cycling climbs - often very close to the legendary passes -
        that deserve more attention.
      </p>
    </AboutSection>
  </>
);

export default About;
