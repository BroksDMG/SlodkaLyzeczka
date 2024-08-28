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
import QuestionsSection from '@/components/QuestionsSection';
import QualitySection from '@/components/QualitySection';
import LocationSection from '@/components/LocationSection';
import CategorySite from '@/components/CategorySite';

import Head from 'next/head';
const Body = styled.body`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
`
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </Body>
    </html>
  );
};

export default RootLayout;
