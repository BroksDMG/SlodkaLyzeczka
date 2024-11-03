import styled,{keyframes,css} from "styled-components";
import Image from "next/image";
import React from "react";

interface StageCardProps{
    image: string;
  video: string;
   setCurrentStageVideo: (video: string) => void;
  isActive:boolean;
  index:number;
  Xtranslate:number;
}

const showStage = (index:number)=>keyframes`
   from{
    transform:scale(1.3) translateY(-10%) ;
   }
   to{transform:scale(3) scaleX(3)  translateY(-25%) translateX(-${15*index}%);
    opacity:0.2}
`
const lastStage=()=>keyframes`
  from{
    width:0;
  }
  to{
    width:100%;
}
`

const StageCardContainer = styled.div<{ $isActive: boolean,$index:number,$Xtranslate:number }>`
  position: relative;
  overflow: hidden;
  width:100%;
  z-index:2;
  border-radius: 8px;
  min-width: 10em;
  cursor: pointer;
  opacity:0.5;
  transition: transform 0.3s ease;
  transform: translateX(-${(props) => props.$index * 100}%);
  ${(props)=>props.$isActive&&css`
    animation: ${showStage(props.$index)} 0.3s linear ;
  `}
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
const StageCard: React.FC<StageCardProps> = ({ image, video,  setCurrentStageVideo, isActive,index,Xtranslate }) => (
  <StageCardContainer $Xtranslate={Xtranslate} className="stageCard" onClick={() =>  setCurrentStageVideo(video)} $isActive={isActive} $index={index}>
    <StageCardImage src={image} alt="stage image" priority width={100}height={100}/>
  </StageCardContainer>
);

export default StageCard;
