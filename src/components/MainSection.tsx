import styled from 'styled-components';
import Image from 'next/image';
import { useRef,useEffect,useState } from 'react';
import Button from './Button';
import StageSlider from './StageSlider';
import React from 'react';
const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color:${props=>props.theme.colors.textWhite   };
`;
const VideoSource = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.5;
  transition: all 0.5s ease;
`;
const LogoImg = styled(Image)`
  max-width: 300px;
  margin-left:${props=>props.theme.spacing.medium};
  height: auto;
  position:absolute;
`;
const Filter = styled.div`
  background-color:${(props=>props.theme.colors.gold)};
  position: absolute;
  width: 100%;
  height: 100%;
  opacity:40%;
`
const TextContainer  =styled.div`
  border-radius:15px;
  padding: 10px;
  width:70%;
  height:50vh;
  position:absolute;
  top:30vh;
  left:${props=>props.theme.spacing.xlarge};
  h1{
    opacity:1;
  }
  p{
    font-size:${props=>props.theme.textSize.large};
  }
  @media(max-width:760px){
    top:25vh;
    width:80%;
    p{
      font-size:${props=>props.theme.textSize.medium};
    }
    h1{
      font-size:${props=>props.theme.textSize.large}
    }
  }
`

const ButtonContainer=styled.div`
 p{
    font-size:${props=>props.theme.textSize.medium};
  }
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  justify-content:center;
  @media (max-width:760px){
    p{
      font-size:${props=>props.theme.textSize.small};
    }
  }
 
`
const MainSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentStageVideo, setCurrentStageVideo] = useState('/videos/main.mp4');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <MainContainer>
      <Filter />
      <LogoImg src='/images/logo.png' alt="logoHeader" width={150} height={150} priority/>
      <TextContainer>
        <h1>Zanurz się w słodką magię każdej łyżeczki!</h1>
        <p>
                W Słodkiej Łyżeczce każde nasze wypieki są ręcznie robione, dodając odrobinę magii
                do każdej okazji. Od wyjątkowych tortów ślubnych przez słodkie stoły po pyszszne babeczki - każdy kęs to czysta rozkosz
        </p>
        <ButtonContainer>
          <p>Sprawdź naszą ofertę i zasmakuj słodkich przyjemności</p>
          <Button radius='10px' >Sprawdź!</Button>
        </ButtonContainer>
      </TextContainer>
      <StageSlider setCurrentStageVideo={setCurrentStageVideo}/>
      <VideoSource  ref={videoRef} src={currentStageVideo} autoPlay muted loop />
    </MainContainer>
  );
};
export default MainSection;
