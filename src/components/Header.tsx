import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
interface HeaderInterface{
  isSticky:boolean;
}
const HeaderContainer = styled.header<{ $sticky: boolean }>`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textGold};
  display: flex;
  font-size:${(props)=>props.theme.textSize.large};
  align-items: center; 
  top:0;
  position: sticky;
  z-index:10;
  transition: transform 0.6s ease;
  transform: ${(props ) => (props.$sticky ? 'translateY(0)' : 'translateY(-100%)')};
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
  white-space: nowrap;

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
const Header: React.FC<HeaderInterface> = ({isSticky}) => (
  <HeaderContainer $sticky={isSticky}>
    <a href="logo"><LogoImg src='/images/logo.png' alt="logoHeader" width={150} height={150} priority /></a>
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
