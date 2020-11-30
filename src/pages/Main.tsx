import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container>
      <MainContainer to={'/home'}>
        <BackgroundImage src={'assets/images/exterior_DM(no logo).png'} />
        <LogoImage src={'assets/images/exterior logo.gif'} />
      </MainContainer>
    </Container>
  );
};

const MainContainer = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;
const LogoImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 18%;
  top: 55.8%;
`;
const BackgroundImage = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Main;
