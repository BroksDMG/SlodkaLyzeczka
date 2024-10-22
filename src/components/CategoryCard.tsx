import styled,{keyframes} from "styled-components";
import Image from "next/image";
import React from "react";

interface CategoryCardProps{
 id:string,
 title:string,
 image:string,
 description:string,
 color:string,
 setCategoryId:(id:string)=>void,
}
const an = keyframes`
  from {
transform: translateY(0%);
}
to {
transform: translateY(-350%);
}
`;
const CategoryCardContainer=styled.article`
    width:20em;
    height:50vh;
    position:relative ; 
    flex: 0 0 auto;

  /* &:hover h1 {
    animation: ${an} 0.5s ease-out forwards;
  } */
  
    &:hover .description {
    opacity: 1;
    transform: translateY(0);
  }
`

const CategoryCardImageContainer=styled.div<{color:string}>`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor: pointer;

    h1{
      display:block;
    color:${props=>props.color};
    font-weight:bolder;
    font-size:${props=>props.theme.textSize.xxlarge};
    text-align:center;
   
    }
  
    div{
      width:90%;
    height:90%;
    border: 4px solid ${props=>props.color};
    position:absolute;
    }
`

const CatergoryCardImage=styled(Image)`
   object-fit:cover; 
   z-index:-1;
`
const DescriptionCategoryCardContainer=styled.div<{color:string}>`
position:relative;
padding:1rem;
opacity:0;
transform: translateY(-20px);
transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
span{
  color:${props=>props.theme.colors.textWhite};
    z-index:1;
    position:relative;
    font-size:${props=>props.theme.textSize.medium};
}
div{
  background-color:${props=>props.color};
    filter:blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    z-index:-1;
}
`

const CategoryCard :React.FC<CategoryCardProps>=({title,description,color,image,setCategoryId,id})=>{
  return(
    <CategoryCardContainer onClick={()=>setCategoryId(id)} >
      <CategoryCardImageContainer color={color}>
        <div color={color}/>
        <h1 color={color}>{title}</h1>
        <CatergoryCardImage src={image} alt="cardimage" fill/>
      </CategoryCardImageContainer>
      <DescriptionCategoryCardContainer className="description" color={color} >
        <div color={color}/>
        <span>{description}</span>
      </DescriptionCategoryCardContainer>
    </CategoryCardContainer>
  );
}

export default CategoryCard
