'use client'
import type { NextPage } from 'next';

import { ThemeProvider } from 'styled-components';
import MainSection from '@/components/MainSection';
import styled from 'styled-components';
import CategorySection from '@/components/CategorySection';
import QuestionsSection from '@/components/QuestionsSection';
import QualitySection from '@/components/QualitySection';
import LocationSection from '@/components/LocationSection';
import CategorySite from '@/components/CategorySite';
const Home: NextPage = () => {
  return (
    <>
      
          <MainSection/>
          <QualitySection/>
          <CategorySection/>
          <CategorySite/>
          <QuestionsSection/>
          <LocationSection/>
    </>
  );
};

export default Home;
