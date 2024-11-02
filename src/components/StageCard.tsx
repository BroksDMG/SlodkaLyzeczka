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
   from{
    transform:scale(1.3) translateY(-10%) ;
   }
   to{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-${15*index}%);
    opacity:0.2}
`

// if (i === 1) {
//   setTimeout(()=>SetStagesData([...stagesData.slice(1), stagesData[0]]),400);
// } else if (i === -1) {
//   SetStagesData( [stagesData[stagesData.length - 1], ...stagesData.slice(0, -1)]);
// }
const StageCardContainer = styled.div<{ $isActive: boolean,$index:number }>`
  position: relative;
  overflow: hidden;
  z-index:2;
  border-radius: 8px;
  min-width: 10em;
  cursor: pointer;
  ${(props)=>props.$isActive&&css`
    animation: ${showStage(props.$index)} 0.3s linear ;
    opacity:0.5;
  `}
`;
const StageCard: React.FC<StageCardProps> = ({ image, video,  setCurrentStageVideo, isActive,index }) => (
  <StageCardContainer className="stageCard" onClick={() =>  setCurrentStageVideo(video)} $isActive={isActive} $index={index}>
    <StageCardImage src={image} alt="stage image" fill priority sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
  </StageCardContainer>
);

export default StageCard;
