import styled from 'styled-components';
import logo from '../assets/logo.png';
import Image from 'next/image';

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.background};
  /* padding: ${(props) => props.theme.spacing.medium}; */
  color: ${(props) => props.theme.colors.textGold};
  display: flex;
  font-size:${(props)=>props.theme.textSize.large};
  align-items: center; /* Dodano dla wyrównania elementów w pionie */
`;

const LogoImg = styled(Image)`
  max-width: 300px;
  height: auto;
`;
const Nav=styled.nav`
    width:100%;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    gap:${(props)=>props.theme.spacing.small};
    align-self:flex-end;
    padding-bottom:20px;
`
const NavList=styled.ul`
   list-style: none;
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  padding: 0 0 0 5px;
  margin: 0;
`
const NavItem=styled.li`
 a {
    color: ${(props) => props.theme.colors.textGold};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.gold};
    }
  }

`
const Stroke=styled.hr`
color:${(props)=>props.theme.colors.textGold};
margin-right:10px;
border:1px solid;
`
const Header: React.FC = () => (
  <HeaderContainer>
    <a href="logo"><LogoImg src={logo} alt="logoHeader" width={150} height={150} /></a>
    <Nav>
      <NavList>
        <NavItem><a href="Kontakt">Kontakt</a></NavItem>
        <NavItem><a href="O Firmie">O Firmie</a></NavItem>
        <NavItem><a href="Oferta">Oferta</a></NavItem>
      </NavList>
      <Stroke/>
    </Nav>
  </HeaderContainer>
);

export default Header;