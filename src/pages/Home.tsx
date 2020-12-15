import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Home: React.FC = () => {
  const [modalOpen, isModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [showGirl, isShowGirl] = useState(false);

  const handleModal = (imgSrc: string) => {
    setModalImgSrc(imgSrc);
    isModalOpen(true);
  };
  return (
    <Container>
      <HomeContainer>
        <BackgroundImage src={'assets/images/background-base.png'} />
        <ClockImg
          src={'assets/images/emotion receptor.gif'}
          onClick={() => handleModal('assets/images/emotion receptor_modal.png')}
        />
        {showGirl ? (
          <GirlImg
            src={'assets/images/girl.png'}
            onClick={() => handleModal('assets/images/morphyPopup.png')}
            onMouseOver={(e) => {}}
            onMouseOut={(e) => {
              isShowGirl(false);
            }}
          />
        ) : (
          <MorphoImg
            src={'assets/images/morpho.gif'}
            onClick={() => handleModal('assets/images/morphyPopup.png')}
            onMouseOver={(e) => {
              isShowGirl(true);
            }}
            onMouseOut={(e) => {}}
          />
        )}
        <DreamorphyFontImg src={'assets/images/logo.gif'} onClick={() => handleModal('assets/images/logoPopup.png')} />
        <RabbitDonutImg src={'assets/images/rabbit.png'} onClick={() => handleModal('assets/images/rabbitPopup.png')} />
        <FoxDonutImg src={'assets/images/fox.png'} onClick={() => handleModal('assets/images/foxPopup.png')} />
        <CatDonutImg src={'assets/images/cat.png'} onClick={() => handleModal('assets/images/catPopup.png')} />
        <BirdDonutImg src={'assets/images/bird.png'} onClick={() => handleModal('assets/images/birdPopup.png')} />
        <HedgehogDonutImg src={'assets/images/hedgehog.png'} onClick={() => handleModal('assets/images/hedgehogPopup.png')} />
        <FishDonutImg src={'assets/images/fish.png'} onClick={() => handleModal('assets/images/fishPopup.png')} />
      </HomeContainer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => isModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },

          content: {
            width: '80%',
            padding: 0,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            height: '80vh',
            transform: 'translate(-50%, -50%)',
            scrollbarWidth: 'thin',
            scrollbarColor: 'red',
          },
        }}>
        <ModalImg src={modalImgSrc} />
      </Modal>
    </Container>
  );
};

const LinkImg = styled.img`
  cursor: pointer;
`;

const ClockImg = styled(LinkImg)`
  position: absolute;
  width: 21%;
  top: 33.5%;
  left: 3%;
`;

const MorphoImg = styled(LinkImg)`
  position: absolute;
  width: 14.5%;
  top: 37%;
  left: 26.5%;
`;
const GirlImg = styled(LinkImg)`
  position: absolute;
  width: 16%;
  top: 24.245%;
  left: 25.5%;
`;
const DonutFontImg = styled(LinkImg)`
  position: absolute;
  width: 23.5%;
  top: 30.5%;
  left: 63.5%;
`;
const DreamorphyFontImg = styled(LinkImg)`
  position: absolute;
  width: 37.5%;
  top: 5%;
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
  width: 100vw;
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
  height: 100vh;
  background: #ffcfd9;
`;
export default Home;
