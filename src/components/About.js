import React from "react";
import styled from "styled-components";
import { measurements } from "../styles/settings";

const AboutSection = styled.section`
  width: 100%;
  max-width: 40rem;
  padding: ${measurements.contentMargin};
`;

const About = () => (
  <AboutSection>
    <h1>Right now</h1>
    <p>
      <strong>Nivolet</strong> is nothing more than a list of notable cycling
      climbs that have been completed by{" "}
      <a href="https://short.is">Alan Shortis</a>. It's probably not
      particularly interesting to anyone else.
    </p>

    <h1>Eventually</h1>
    <p>
      There are many climbs that are regularly used for racing, and these climbs
      become destinations and bucket list items for cyclicts all over the world.
    </p>
    <p>
      Nivolet aims to become a large and detailed catalogue of lesser known
      cycling climbs - often very close to the legendary passes - that deserve
      more attention.
    </p>
  </AboutSection>
);

export default About;
