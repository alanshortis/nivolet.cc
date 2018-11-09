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
      <h2>How are climb categories decided?</h2>
      <p>
        A simple method is used to determine which category a climb falls into:
      </p>
      <ol>
        <li>
          Assign a score by multiplying the length (in meters) by the average
          gradient.
        </li>
        <li>If that score is more than 64,000, the climb is HC.</li>
        <li>More than 48,000: Cat 1.</li>
        <li>More than 32,000: 2.</li>
        <li>More than 16,000: 3.</li>
        <li>More than 8,000: 4.</li>
        <li>Less than 8,000, the climb is not categorised.</li>
      </ol>
      <p>
        Categories here may differ from those used for the same climbs during a
        race. The category might differ depeding on what point of the race a
        climb is included, or climbs are given categorisation so that KOM points
        can be awarded even if the climb isn't teachnically 'difficult' enough.
      </p>
    </AboutSection>
  </>
);

export default About;
