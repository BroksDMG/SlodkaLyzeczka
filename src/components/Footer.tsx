import styled from 'styled-components';
import Image from 'next/image';
import { AiFillInstagram ,AiFillFacebook} from "react-icons/ai";
import Link from 'next/link';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.gold};
  padding: ${(props) => props.theme.spacing.medium};
  color: white;
  text-align: center;
  align-self:flex-end;
  width:100%;
  display:flex;
  margin-top: auto;
`;

const LogoImg = styled(Image)`
  max-width: 300px;
  height: auto;
  width:100px;

  @media (min-width:480px ) {
    width:150px;
  }
`;
const FotterTextContainer=styled.ul`
  list-style-type:none;
  display:flex;
  align-items:center;
  text-align:start;
  width:100%;
  gap:2px;
  justify-content: space-around;
  font-size:${(props)=>props.theme.textSize.small};

  @media (min-width:480px ) {
    font-size:${(props)=>props.theme.textSize.medium};
    justify-content:space-evenly;
  }


  
`
const FotterTextColumn=styled.li`
  display:flex;
  flex-direction:column;
  :first-child{
   white-space:nowrap; 
  }
  @media (max-width: 360px){
    justify-content:space-between;
    height:80%;
  }
`
const FotterSocialMediaContainer=styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  font-size:${(props)=>props.theme.textSize.large};

  @media (min-width:480px ) {
    font-size:${(props)=>props.theme.textSize.xlarge};
  }
`
const IconLinkContainer=styled(Link)`
  display:flex;
`
const Footer: React.FC = () => (
  <FooterContainer>
     <a href="logo"><LogoImg src='/images/logo copy.png' alt="logoHeader" width={150} height={150} /></a>
    <FotterTextContainer>
      <FotterTextColumn>
        <p>Regulamin</p>
        <p>Polityka Prywatności</p>
      </FotterTextColumn>
      <FotterTextColumn>
        <p>Kontakt</p>
        <p>Lokalizacja</p>
      </FotterTextColumn>
      <FotterTextColumn>
        <p>Znajdź nas na:</p>
        <FotterSocialMediaContainer>
          <IconLinkContainer href={'https://www.instagram.com/slodka.lyzeczka/'}><AiFillInstagram/></IconLinkContainer>
          <IconLinkContainer href={'https://www.facebook.com/profile.php?id=100063562181976'}><AiFillFacebook/></IconLinkContainer>
        </FotterSocialMediaContainer>
      </FotterTextColumn>
    </FotterTextContainer>
  </FooterContainer>
);

export default Footer;