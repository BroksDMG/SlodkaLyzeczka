"use client"; // Dodaj tę linię na początku pliku

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: ${(props) => props.theme.spacing.medium};
`;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default ClientLayout;