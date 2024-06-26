import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  color: white;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>My Project</h1>
  </HeaderContainer>
);

export default Header;