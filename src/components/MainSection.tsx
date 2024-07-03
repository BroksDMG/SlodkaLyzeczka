import styled from 'styled-components';
import Image from 'next/image';
import { useRef } from 'react';
import { useEffect } from 'react';
const MainContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
 opacity:30%;
`
const LogoImg = styled(Image)`
  max-width: 300px;
  height: auto;
`;
const Filter = styled.div`
    background-color:${(props=>props.theme.colors.gold)};
    position: absolute;
  width: 100%;
  height: 100%;
  opacity:20%;
`


const MainSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 3; // Ustaw prędkość odtwarzania wideo na 0.5x
      }
    }, []);
  
    return (
      <MainContainer>
        <Filter />
        <a href="#logo"><LogoImg src='/images/logo.png' alt="logoHeader" width={150} height={150} /></a>
        <VideoSource ref={videoRef} src="/videos/main.mp4" autoPlay muted loop />
      </MainContainer>
    );
  };
export default MainSection;