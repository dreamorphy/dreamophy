import React from 'react';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container>
      <MainBackground>
        <LogoImage src={'assets/images/exterior logo.gif'} />
      </MainBackground>
    </Container>
  );
};

const MainBackground = styled.div`
  width: 90vw;
  height: 50vw;
  background: url('assets/images/exterior_DM(no logo).png') no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
`;
const LogoImage = styled.img`
  position: absolute;
  width: 15vw;
  top: 56.5%;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export default Main;
