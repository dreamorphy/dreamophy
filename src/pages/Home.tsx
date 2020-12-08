import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Home: React.FC = () => {
  const [modalOpen, isModalOpen] = useState(false);
  return (
    <Container>
      <HomeContainer>
        <BackgroundImage src={'assets/images/background-base.png'} />
        <ClockImg src={'assets/images/emotion receptor.gif'} onClick={() => isModalOpen(true)} />
        <MorphoImg src={'assets/images/morpho.gif'} />
        <DonutFontImg src={'assets/images/showcase typo.gif'} />
        <DreamorphyFontImg src={'assets/images/logo.gif'} />
        <RabbitDonutImg src={'assets/images/rabbit.png'} />
        <FoxDonutImg src={'assets/images/fox.png'} />
        <CatDonutImg src={'assets/images/cat.png'} />
        <BirdDonutImg src={'assets/images/bird.png'} />
        <HedgehogDonutImg src={'assets/images/hedgehog.png'} />
        <FishDonutImg src={'assets/images/fish.png'} />
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
  width: 26%;
  top: 31.5%;
  left: 3%;
`;

const MorphoImg = styled(LinkImg)`
  position: absolute;
  width: 16.5%;
  top: 35.5%;
  left: 29.5%;
`;
const DonutFontImg = styled(LinkImg)`
  position: absolute;
  width: 23.5%;
  top: 30.5%;
  left: 63.5%;
`;
const DreamorphyFontImg = styled(LinkImg)`
  position: absolute;
  width: 28.5%;
  top: 19%;
  left: 36%;
`;
const RabbitDonutImg = styled(LinkImg)`
  position: absolute;
  width: 5.5%;
  top: 40%;
  left: 63%;
`;
const FoxDonutImg = styled(LinkImg)`
  position: absolute;
  width: 5.5%;
  top: 41.5%;
  left: 73.5%;
`;
const CatDonutImg = styled(LinkImg)`
  position: absolute;
  width: 5.5%;
  top: 42.5%;
  left: 83.7%;
`;
const BirdDonutImg = styled(LinkImg)`
  position: absolute;
  width: 10%;
  top: 60%;
  left: 63%;
}
`;
const HedgehogDonutImg = styled(LinkImg)`
  position: absolute;
  width: 6%;
  top: 60%;
  left: 76%;
`;
const FishDonutImg = styled(LinkImg)`
  position: absolute;
  width: 8.5%;
  top: 60%;
  left: 85.5%;
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
  height: intrinsic;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Home;
