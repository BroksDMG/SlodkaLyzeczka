import styled, { keyframes } from "styled-components";
import CategoryCard from "./CategoryCard";
import theme from "@/styles/theme";
import React, { useEffect, useRef, useState } from "react";

// Tworzymy animację przesuwania w nieskończoność
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CategorySectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SliderWrapper = styled.div<{ $translateX: number; $isDragging: boolean }>`
  display: flex;
  width: max-content;
  transform: translateX(${({ $translateX }) => $translateX}px);
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  transition: ${({ $isDragging }) => ($isDragging ? "none" : "transform 0.5s ease")};
  /* animation ${scroll} 40s k */
`;

interface CategorySectionInterface {
  setCategoryId: (id: string) => void;
}

const CategorySection: React.FC<CategorySectionInterface> = ({ setCategoryId }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [initialTranslateX, setInitialTranslateX] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  useEffect(() => {
    // Obliczamy maksymalne przesunięcie (szerokość slidera - szerokość widocznego obszaru)
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    setMaxTranslateX(sliderWidth - containerWidth); // Maksymalna ilość przesunięcia w lewo
  }, []);

  // Dodajemy niestandardowy event listener z passive: false
  useEffect(() => {
    const container = sliderRef.current;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Blokujemy domyślne przewijanie
      setTranslateX((prev) => {
        const newTranslateX = prev - e.deltaY;
        return Math.max(Math.min(newTranslateX, 0), -maxTranslateX); // Ograniczamy przesunięcie w obu kierunkach
      });
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [maxTranslateX]);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setInitialTranslateX(translateX); // Zapisujemy pozycję translateX przy rozpoczęciu
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX; // Ruch w poziomie
    const newTranslateX = initialTranslateX + deltaX;
    setTranslateX(Math.max(Math.min(newTranslateX, 0), -maxTranslateX)); // Ograniczamy przesunięcie w obu kierunkach
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <CategorySectionContainer ref={containerRef}>
      <SliderWrapper
        ref={sliderRef}
        $translateX={translateX}
        $isDragging={isDragging}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // To make sure dragging stops when the cursor leaves the slider area
      >
        {[...qualityData, ...qualityData].map((data, i) => (
          <CategoryCard
            key={data.image + i}
            setCategoryId={setCategoryId}
            id={data.id}
            image={data.image}
            description={data.description}
            title={data.title}
            color={data.color}
          />
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
