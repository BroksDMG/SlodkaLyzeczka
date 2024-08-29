import styled from "styled-components";
import Image from "next/image";
import React from "react";

interface CategoryCardProps{
 id:string,
 title:string,
 image:string,
 description:string,
 color:string,
 setOnClickCategoryHandler:(id:string)=>void;
}

const CategoryCardContainer=styled.article`
    width:20em;
    height:50vh;
    position:relative ; 
    flex: 0 0 auto;
`

const CategoryCardImageContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`

const CatergoryCardImage=styled(Image)`
   object-fit:cover; 
   z-index:-1;
`
const CategoryCardBorder=styled.div<{color:string}>`
    width:90%;
    height:90%;
    border: 4px solid ${props=>props.color};
    position:absolute;
    
`
const TitleCategoryCard=styled.h1<{color:string}>`
    color:${props=>props.color};
    font-weight:bolder;
    font-size:${props=>props.theme.textSize.xxlarge};
    text-align:center;
    
`
const DescriptionCategoryCardContainer=styled.div<{color:string}>`
position:relative;
padding:1rem;
`
const BlurBacground=styled.div<{color:string}>`
background-color:${props=>props.color};
    filter:blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    z-index:-1;

`
const DescriptonsCategoryCard=styled.p`
    color:${props=>props.theme.colors.textWhite};
    z-index:1;
    position:relative;
    font-size:${props=>props.theme.textSize.medium};
`
const CategoryCard :React.FC<CategoryCardProps>=({title,description,color,image,setOnClickCategoryHandler,id})=>(
    <CategoryCardContainer onClick={()=>setOnClickCategoryHandler(id)} >
       <CategoryCardImageContainer>
            <CategoryCardBorder color={color}/>
            <TitleCategoryCard color={color}>{title}</TitleCategoryCard>
            <CatergoryCardImage src={image} alt="cardimage" layout="fill"/>
       </CategoryCardImageContainer>
       <DescriptionCategoryCardContainer color={color} >
            <BlurBacground color={color}/>
            <DescriptonsCategoryCard>{description}</DescriptonsCategoryCard>
       </DescriptionCategoryCardContainer>
    </CategoryCardContainer>
);

export default CategoryCard