import styled from 'styled-components';
import Image from 'next/image';
import { useRef,useEffect,useState } from 'react';
import Button from './Button';
import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";
import StageCard from './StageCard';
import theme from '@/styles/theme';
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
  opacity:50%;
`
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
    margin-top:30vh;
    margin-left:${props=>props.theme.spacing.xlarge};
`
const TextTitle=styled.h1`
opacity:1;
`
const NormalText=styled.p`
    font-size:${props=>props.theme.textSize.large};
`
const NormalCenterText=styled.p`
    font-size:${props=>props.theme.textSize.medium};
    text-align:center;
`
const StageContainer =styled.div`
    width:100%;
    display:flex;
    justify-content:end;
    align-items:end;
    height:100vh;
`
const Section =styled.section`
    width:50%;
    display:flex;
    gap:${props=>props.theme.spacing.medium};
    align-items:end;
    margin-bottom:${props=>props.theme.spacing.xlarge};
    margin-right:${props=>props.theme.spacing.medium};
`
const ButtonContainer=styled.div`
        display:flex;
        width:100%;
    justify-content:center;
`
const MainSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stagesData,setStagesData]=useState(
    [
      {
        imagePath:'/images/Stage0.jpg',
        videoPath:'/videos/main.mp4',
      },
      {
        imagePath:'/images/Stage1.jpg',
        videoPath:'/videos/Ciastko.mp4',
      },
      {
        imagePath:'/images/Stage2.jpg',
        videoPath:'/videos/Babeczki.mp4',
      },
    ]
  )
  const [currentStageVideo,SetCurrentStageVideo]=useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Ustaw prędkość odtwarzania wideo na 0.5x
    }
  }, []);
  return (
    <MainContainer>
      <Filter />

      <LogoImg src='/images/logo.png' alt="logoHeader" width={150} height={150} />
      <TextContainer>
        <TextTitle>Zanurz się w słodką magię każdej łyżeczki!</TextTitle>
        <NormalText>
                W Słodkiej Łyżeczce każde nasze wypieki są ręcznie robione, dodając odrobinę magii
                do każdej okazji. Od wyjątkowych tortów ślubnych przez słodkie stoły po pyszszne babeczki - każdy kęs to czysta rozkosz
        </NormalText>
        <NormalCenterText>Sprawdź naszą ofertę i zasmakuj słodkich przyjemności</NormalCenterText>
        <ButtonContainer>
          <Button radius='10px' >Sprawdź!</Button>

        </ButtonContainer>
      </TextContainer>
      <StageContainer>
        <Section>
          <Button radius="50%" fontSize={theme.textSize.xlarge}>< BiSolidLeftArrow/></Button>
          <Button radius='50%' fontSize={theme.textSize.xlarge}><BiSolidRightArrow/></Button>
          {stagesData.map((stageData, index) => (
            <StageCard
              key={index}
              image={stageData.imagePath}
              video={stageData.videoPath}
              SetCurrentStageVideo={SetCurrentStageVideo}
            />
          ))}
        </Section>
      </StageContainer>

      {/* <VideoSource ref={videoRef} src="/videos/main.mp4" autoPlay muted loop /> */}
      <VideoSource ref={videoRef} src={currentStageVideo} autoPlay muted loop />
    </MainContainer>
  );
};
export default MainSection;
