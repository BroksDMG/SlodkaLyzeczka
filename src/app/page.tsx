'use client'
import type { NextPage } from 'next';
import MainSection from '@/components/MainSection';
import CategorySection from '@/components/CategorySection';
import QuestionsSection from '@/components/QuestionsSection';
import QualitySection from '@/components/QualitySection';
import LocationSection from '@/components/LocationSection';
import CategorySite from '@/components/CategorySite';
import Header from '../components/Header';
import { useState ,useEffect} from 'react';
import React from 'react';
const Home: NextPage = () => {
  const [categoryId,setCategoryId]=useState('');
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('footer');

    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.1,
        }
      );

      observer.observe(footer);

      return () => {
        observer.disconnect(); // Odłączenie obserwatora przy demontażu komponentu
      };
    }
  }, []);
  return (
    <>

      <MainSection/>
      <Header isSticky={isSticky}/>

      <QualitySection/>
      <CategorySection setCategoryId={setCategoryId}/>
      <CategorySite categoryId={categoryId} setCategoryId={setCategoryId}/>
      <QuestionsSection/>
      <LocationSection/>
    </>
  );
};

export default Home;
