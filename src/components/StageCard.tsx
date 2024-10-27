import styled,{css} from "styled-components";
import Image from "next/image";
import React from "react";

interface StageCardProps{
    image: string;
  video: string;
   setCurrentStageVideo: (video: string) => void;
  isActive:boolean;
}
const StageCardImage= styled(Image)`
object-fit:cover;
`
const Filter = styled.div`
    background-color:${(props=>props.theme.colors.gold)};
    position: absolute;
  width: 100%;
  height: 100%;
  opacity:25%;
  z-index:1;
`
const StageCardContainer = styled.div<{ $isActive: boolean }>`
  width: 13em;
  height: 35vh;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  min-width: 10em;
  cursor: pointer;
  flex-shrink:0;
  
`;
const StageCard: React.FC<StageCardProps> = ({ image, video,  setCurrentStageVideo, isActive }) => (
  <StageCardContainer className="stageCard" onClick={() =>  setCurrentStageVideo(video)} $isActive={isActive}>
    <Filter />
    <StageCardImage src={image} alt="stage image" fill priority sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" />
  </StageCardContainer>
);

export default StageCard;
