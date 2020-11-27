import React from 'react';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container>
      <MainBackground>
        <LogoImage src={'assets/images/exterior logo.gif'} />
        <div id='abcdefg-jhw811'>왜안되는거냐............</div>
      </MainBackground>
    </Container>
  );
};

const MainBackground = styled.div`
  width: 1366px;
  height: 766px;
  background: url('assets/images/exterior_DM(no logo).png');
  position: relative;
  display: flex;
  justify-content: center;
`;
const LogoImage = styled.img`
  position: absolute;
  top: 430px;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export default Main;
