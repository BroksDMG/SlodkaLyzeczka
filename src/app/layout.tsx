'use client'
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '@/components/MainSection';
import styled from 'styled-components';
import CategorySection from '@/components/CategorySection';
const Body = styled.body`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
`
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainSection/>
          <Header />
          <CategorySection/>
          <Footer />
        </ThemeProvider>
      </Body>
    </html>
  );
};

export default RootLayout;
