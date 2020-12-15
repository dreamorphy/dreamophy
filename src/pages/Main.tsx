import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container to={'/home'}>
      <BackgroundContainer>
        <BackgroundImage src={'assets/images/store.png'} />
        <LogoImage src={'assets/images/exterior logo.gif'} />
      </BackgroundContainer>
    </Container>
  );
};
const LogoImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 18%;
  top: 54.5%;
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
  align-items: center;
`;

const Container = styled(Link)`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #3f1c33;
`;
export default Main;
