import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import theme from "@/styles/theme";
import React from "react";
const CategorySectionContainer=styled.section`
    width:100%;
    height:100vh;
    position:relative;
    overflow:hidden;
    display: flex;
    align-items:center;
    overflow-x: auto; /* Allow horizontal scrolling */
`
interface CategorySectionInterface{
    setOnClickCategoryHandler:(id:string)=>void;
}

const CategorySection:React.FC<CategorySectionInterface>=({setOnClickCategoryHandler})=>{

  return(
    <CategorySectionContainer>
      {qualityData.map((data,i)=><CategoryCard setOnClickCategoryHandler={setOnClickCategoryHandler} id={data.id} image={data.image} key={data.image+i} description={data.description} title={data.title} color={data.color}/>)}
    </CategorySectionContainer>
  )
}

export default CategorySection

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
