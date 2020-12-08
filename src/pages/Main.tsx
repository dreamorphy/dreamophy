import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container to={'/home'}>
      <BackgroundContainer>
        <BackgroundImage src={'assets/images/exterior_DM(no logo).png'} />
        <LogoImage src={'assets/images/exterior logo.gif'} />
      </BackgroundContainer>
    </Container>
  );
};
const LogoImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 18%;
  top: 55.8%;
`;
const BackgroundImage = styled.img`
  object-fit: contain;
  height: intrinsic;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Container = styled(Link)`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Main;
