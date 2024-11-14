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
    transform:scale(1) translateY(-10%) ;
   }
   to{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-15%);
    opacity:0.1}
`
const hideStage = ()=>keyframes`
    from{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-15%);
      opacity:0}
   to{
    transform:scale(1) translateY(0);
     opacity: 0.5   ;
   }
`
const showlastStage=()=>keyframes`
  to{
    transform:scaleX(1)
}
`
const hidelastStage=()=>keyframes`
  to{
    transform:scaleX(0)
}
`

const StageCard = styled.div`
  position: relative;
  width:10em;
  z-index:2;
  aspect-ratio:24/41;
  opacity:0.5;

`;
const StageCardImage= styled(Image)`
object-fit:cover;
border-radius: 8px;
width:100%;
height:100%;

`
const StageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  height: 100vh;
  gap: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.xlarge};
  .slider {
    gap: ${props => props.theme.spacing.medium};
    width: 50%;
    height:35vh;
    display: flex;
    
       
    &.next {
      /* Przesunięcie w lewo */
      .stageCard:nth-child(1) {
        animation: ${showStage} 0.3s linear forwards ;
      }
      .stageCard {
        transform: translateX(-100%); 
        transition: transform 0.3s ease-in-out;
    }
    }
    &.nextLast{
      .stageCard:nth-last-child(1) {
      transform:scaleX(0);
      transform-origin:left;
      animation: ${showlastStage} 0.3s ease-in-out forwards;
      }
    }
    &.prev{
      
      .stageCard {
        transform: translateX(100%); 
        transition: transform 0.3s linear;
      }
      .stageCard:nth-last-child(1) {
        transform-origin:right;
        transform:scaleX(1);
        animation: ${hidelastStage} 0.3s ease-in-out forwards;
      }
    }
    &.prevFirst{
      .stageCard:nth-child(1) {
        animation: ${hideStage} 0.3s linear  ;
      }
    }
    @media (max-width:760px) {
      height:25vh;
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
  const buttonHandler = (direction  : number) => {
    const newIndex = (activeIndex + direction + stagesData.length) % stagesData.length;
    const sliderDom= document.querySelector('.slider');
    const itemThumbNail= document.querySelectorAll('.stageCard');
    if(direction===1){
      sliderDom?.classList.add('next')
      setTimeout(() => {
        sliderDom?.appendChild(itemThumbNail[0]) ;
        sliderDom?.classList.remove('next');
        setCurrentStageVideo(stagesData[newIndex].videoPath);
        setActiveIndex(newIndex);
        sliderDom?.classList.add("nextLast");
      }, 300); // Czas trwania animacji + mała przerwa
      setTimeout(()=>{
        sliderDom?.classList.remove('nextLast')
      },600)
    }else{
      sliderDom?.classList.add('prev');
      setTimeout(()=>{
        sliderDom?.prepend(itemThumbNail[itemThumbNail.length-1]);
        setCurrentStageVideo(stagesData[newIndex].videoPath);
        setActiveIndex(newIndex);
        sliderDom?.classList.remove('prev')
        sliderDom?.classList.add('prevFirst');

      },300)
      setTimeout(()=>{
        sliderDom?.classList.remove('prevFirst')
      },600)
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
