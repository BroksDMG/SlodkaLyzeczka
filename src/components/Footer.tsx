import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.medium};
  color: white;
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© 2024 My Project. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;