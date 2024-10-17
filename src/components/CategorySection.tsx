import styled, { keyframes } from "styled-components";
import CategoryCard from "./CategoryCard";
import theme from "@/styles/theme";
import React, { useRef } from "react";

// Tworzymy animację przesuwania w nieskończoność
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
// Kontener sekcji slidera
const CategorySectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
// Kontener elementów slidera
const SliderWrapper = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 40s linear infinite;
  animation-play-state: running;
  
  &:hover {
    animation-play-state: paused;
    transition: all 0.5s ease; 
  } 
`;

interface CategorySectionInterface {
  setOnClickCategoryHandler: (id: string) => void;
}

const CategorySection: React.FC<CategorySectionInterface> = ({ setOnClickCategoryHandler }) => {

  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <CategorySectionContainer
    >
      <SliderWrapper ref={sliderRef}>
        {[...qualityData, ...qualityData].map((data, i) => (
          <>{/* Powielamy elementy dla nieskończonego efektu */}
            {console.log(qualityData)}
            <CategoryCard
              setOnClickCategoryHandler={setOnClickCategoryHandler}
              id={data.id}
              image={data.image}
              key={data.image + i}
              description={data.description}
              title={data.title}
              color={data.color}
            /></>
        ))}
      </SliderWrapper>
    </CategorySectionContainer>
  );
};

export default CategorySection;

const qualityData=[
  {
    id:'BirthdayCakes',
    color:theme.colors.goldIntense,
    image:'/images/tortyUrodzinoweCategorySectionImage.png',
    title:'Torty Urodzinowe',
    description:'Słodkie chwile pełne magii, które uczynią każdą uroczystość niezapomnianą. Nasze torty okazjonalne są tworzone z dbałością o każdy detal, aby w pełni oddać charakter Twojej okazji',

  },
  {
    id:'WeedingCakes',
    color:theme.colors.lightBeige,
    image:'/images/tortySlubneCategorySectionImage.png',
    title:'Torty Ślubne',
    description:'Słodkie chwile pełne magii, które uczynią każdą uroczystość niezapomnianą. Nasze torty okazjonalne są tworzone z dbałością o każdy detal, aby w pełni oddać charakter Twojej okazji',

  }
  ,
  {
    id:'OccasionalSweets',
    color:theme.colors.beige,
    image:'/images/slodkosciOkazjonalneCategorySectionImage.png',
    title:'Słodkości Okazjonalne',
    description:'Słodkie chwile pełne magii, które uczynią każdą uroczystość niezapomnianą. Nasze torty okazjonalne są tworzone z dbałością o każdy detal, aby w pełni oddać charakter Twojej okazji',

  },
  {
    id:'CupCakes',
    color:theme.colors.pink,
    image:'/images/BabeczkiCategorySectionImage.png',
    title:'Babeczki',
    description:'Słodkie chwile pełne magii, które uczynią każdą uroczystość niezapomnianą. Nasze torty okazjonalne są tworzone z dbałością o każdy detal, aby w pełni oddać charakter Twojej okazji',

  },
  {
    id:'SeetTables',
    color:theme.colors.beige,
    image:'/images/SlodkiStolCategorySectionImage.png',
    title:'Słodkie Stoły',
    description:'Słodkie chwile pełne magii, które uczynią każdą uroczystość niezapomnianą. Nasze torty okazjonalne są tworzone z dbałością o każdy detal, aby w pełni oddać charakter Twojej okazji',

  }
]
