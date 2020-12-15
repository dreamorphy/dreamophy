import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container to={'/home'}>
      <BackgroundContainer>
        <EmailFontImage
          src={'assets/images/contact.png'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:wlgus629@naver.com';
          }}
        />
        <RollingpagerFontImage
          src={'assets/images/rollingpaper.png'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://rollingpaper.site/rolls/362473?editable=true';
          }}
        />
        <BackgroundImage src={'assets/images/store.png'} />
        <LogoImage src={'assets/images/exterior logo.gif'} />
      </BackgroundContainer>
    </Container>
  );
};
const EmailFontImage = styled.img`
  position: absolute;
  width: 7.5%;
  top: 12.5%;
  left: 2%;
`;

const RollingpagerFontImage = styled.img`
  position: absolute;
  width: 12%;
  top: 16.5%;
  left: 2%;
`;

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
