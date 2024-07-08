import styled from "styled-components";
import Image from "next/image";
interface StageCardProps{
    image: string;
  video: string;
  SetCurrentStageVideo: (video: string) => void;
}
const StageCardContainer=styled.div`
  width: 13em;
  height: 35vh; 
  position: relative; 
  overflow: hidden; 
  border-radius: 8px; 
  min-width:10em;
  cursor: pointer;
`
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
const StageCard: React.FC<StageCardProps> = ({ image, video, SetCurrentStageVideo }) => (
    <StageCardContainer onClick={() => SetCurrentStageVideo(video)}>
      <Filter />
      <StageCardImage src={image} alt="stage image" layout="fill" />
    </StageCardContainer>
  );

export default StageCard;