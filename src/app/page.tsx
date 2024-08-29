'use client'
import type { NextPage } from 'next';
import MainSection from '@/components/MainSection';
import CategorySection from '@/components/CategorySection';
import QuestionsSection from '@/components/QuestionsSection';
import QualitySection from '@/components/QualitySection';
import LocationSection from '@/components/LocationSection';
import CategorySite from '@/components/CategorySite';
import { useState } from 'react';

const Home: NextPage = () => {
  const [categoryCardOnClickHandler,setCategoryOnClickHandler]=useState('');
  return (
    <>
      
          <MainSection/>
          <QualitySection/>
          <CategorySection setOnClickCategoryHandler={setCategoryOnClickHandler}/>
          <CategorySite onClickCategoryHandler={categoryCardOnClickHandler}/>
          <QuestionsSection/>
          <LocationSection/>
    </>
  );
};

export default Home;
