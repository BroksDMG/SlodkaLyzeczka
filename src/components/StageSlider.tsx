import styled,{keyframes} from "styled-components";
import Image from "next/image";
import React,{useState} from "react";
import Button from './Button';
import theme from '@/styles/theme';
import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";

interface StageCardProps{
   setCurrentStageVideo: (video: string) => void;
}

const showStage = ()=>keyframes`
   from{
    transform:scale(1.3) translateY(-10%) ;
   }
   to{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-15%);
    opacity:0.1}
`
const showlastStage=()=>keyframes`
  to{
    width:10em;
}
`

const StageCard = styled.div`
  position: relative;
  overflow: hidden;
  width:10em;
  z-index:2;
  border-radius: 8px;
  aspect-ratio:24/41;
  cursor: pointer;
  opacity:0.5;

`;
const StageCardImage= styled(Image)`
object-fit:cover;
width:100%;
height:100%;
@media(max-width:600px){
  /* width:100%; */
}
@media(max-width:1200px){
  /* width:50%; */
}

`
const StageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  height: 100vh;
  .slider {
    width: 50%;
    height:35vh;
    display: flex;
    gap: ${props => props.theme.spacing.medium};
    margin-bottom: ${props => props.theme.spacing.xlarge};
    .stageCard:nth-last-child(1) {
        width: 0;
        animation: ${showlastStage} 0.3s linear 0.5s forwards;
      }
    &.next {
      /* Przesunięcie w lewo */
      .stageCard:nth-child(1) {
        animation: ${showStage} 0.3s linear forwards ;
      }
      .stageCard {
        transform: translateX(-100%); /* Dodanie płynności */
        transition: transform 0.4s ease-in-out
    }
    }
  }
`;
const StageSlider: React.FC<StageCardProps> = ({  setCurrentStageVideo, }) => {
  const stagesData=[
    { imagePath: '/images/Stage1.jpg', videoPath: '/videos/Ciastko.mp4' },
    { imagePath: '/images/Stage2.jpg', videoPath: '/videos/Babeczki.mp4' },
    { imagePath: '/images/Stage0.jpg', videoPath: '/videos/main.mp4' },
  ]

  const [activeIndex, setActiveIndex] = useState(stagesData.length-1);

  // const handleSceneChange = (newVideo: string, index: number) => {
  //   setCurrentStageVideo(newVideo);
  //   setActiveIndex(index);
  // };
  console.log(activeIndex)
  const buttonHandler = (direction  : number) => {
    const newIndex = (activeIndex + direction + stagesData.length) % stagesData.length;
    setTimeout(()=>{
      setCurrentStageVideo(stagesData[newIndex].videoPath);
      setActiveIndex(newIndex);
    },400)
    console.log(activeIndex)
    const sliderDom= document.querySelector('.slider');
    const itemThumbNail= document.querySelectorAll('.stageCard');

    if(direction===1){
      sliderDom?.classList.add('next')
      setTimeout(() => {
        sliderDom?.appendChild(itemThumbNail[0]) ;
        sliderDom?.classList.remove('next');
      }, 500);
    }
  };
  return(
    <StageContainer >
      <Button onClick={()=>buttonHandler(-1)} radius="50%" fontSize={theme.textSize.xlarge}>< BiSolidLeftArrow/></Button>
      <Button onClick={()=>buttonHandler(1)} radius='50%' fontSize={theme.textSize.xlarge}><BiSolidRightArrow/></Button>
      <div className='slider'>
        {stagesData.map((stageData, index) => (
          <StageCard
            key={index}
            className="stageCard"
          >
            <StageCardImage src={stageData.imagePath} alt="stage image" priority width={100}height={100}/>
          </StageCard>
        ))}
      </div>
    </StageContainer>
  );
}

export default StageSlider;
