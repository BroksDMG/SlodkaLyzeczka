import styled,{keyframes,css} from "styled-components";
import Image from "next/image";
import React from "react";

interface StageCardProps{
    image: string;
  video: string;
   setCurrentStageVideo: (video: string) => void;
  isActive:boolean;
  index:number;
}
const StageCardImage= styled(Image)`
object-fit:cover;
`

const showStage = (index:number)=>keyframes`

   15%{
    transform:scale(1.3) translateY(-10%) translateX(5%*index);
   }
   30%{
     transform:scale(2) scaleX(${1.5*index/2}) translateY(-15%) translateX(-5%*index);
     opacity:0.4
   }
   50%{
    transform:scale(2.5) scaleX(${2*index/2})  translateY(-20%) translateX(-10%*index);
    opacity:0.4
   }
   70%{
    transform:scale(2.5) scaleX(${2.5*index/2})  translateY(-25%) translateX(-15%*index);
    opacity:0.4
   }
   100%{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-25%);
    opacity:0.2}
`
const StageCardContainer = styled.div<{ $isActive: boolean,$index:number }>`
  /* width: 13em;
  height: 35vh; */
  position: relative;
  overflow: hidden;
  z-index:2;
  border-radius: 8px;
  min-width: 10em;
  cursor: pointer;
  ${(props)=>props.$isActive&&css`
    animation: ${showStage(props.$index)} 0.3s linear ;
    opacity:0.5;
    /* transform:scale(2)  translateY(-15%) ; */

    
  `}
`;
const StageCard: React.FC<StageCardProps> = ({ image, video,  setCurrentStageVideo, isActive,index }) => (
  <StageCardContainer className="stageCard" onClick={() =>  setCurrentStageVideo(video)} $isActive={isActive} $index={index}>
    <StageCardImage src={image} alt="stage image" fill priority sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
  </StageCardContainer>
);

export default StageCard;
