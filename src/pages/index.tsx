import styled from 'styled-components';

const StyledP = styled.p`
  color: ${p => p.theme.type};
  font-weight: bold;
`;

const Home = () => <StyledP>Text</StyledP>;

export default Home;
