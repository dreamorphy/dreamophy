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
  width: 1366px;
  height: 766px;
  background: url('assets/images/exterior_DM(no logo).png');
  position: relative;
`;
const LogoImage = styled.img`
  position: absolute;
  top: 430px;
  left: 580px;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export default Main;
