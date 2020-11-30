import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Home: React.FC = () => {
  const [modalOpen, isModalOpen] = useState(false);
  return (
    <Container>
      <HomeContainer>
        <BackgroundImage src={'assets/images/interior.png'} />
        <ClockImg src={'assets/images/emotion receptor.gif'} onClick={() => isModalOpen(true)} />
        <MorphoImg src={'assets/images/morpho.gif'} />
        <FontImg src={'assets/images/showcase typo.gif'} />
      </HomeContainer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => isModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            width: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}>
        <ModalImg src={'assets/images/emotion receptor_modal.png'} />
      </Modal>
    </Container>
  );
};

const LinkImg = styled.img`
  cursor: pointer;
`;

const ClockImg = styled(LinkImg)`
  position: absolute;
  width: 25%;
  top: 31.5%;
  left: 3%;
`;

const MorphoImg = styled(LinkImg)`
  position: absolute;
  width: 16.5%;
  top: 35.5%;
  left: 29%;
`;
const FontImg = styled(LinkImg)`
  position: absolute;
  width: 23.5%;
  top: 32.5%;
  left: 63%;
`;
const ModalImg = styled(LinkImg)`
  width: 100%;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;
const BackgroundImage = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Home;
