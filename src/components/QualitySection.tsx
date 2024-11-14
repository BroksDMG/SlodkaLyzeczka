import styled from "styled-components";
import Image from "next/image";
import React from "react";
const QualitySectionContainer=styled.section`
  width:100%;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
`
const QualityCardTitleContainer=styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  margin:20px 0 20px 0;
  h1{
    font-size:${(props)=>props.theme.textSize.xlarge};
  }
  @media (max-width: 760px){
    width:100%;
    padding:0 20px 0 20px;
}
`
const QualityCardContainer=styled.ul`
  width:100%;
  position:relative;
  display:flex;
  justify-content:center;
  list-style-type:none;
  border-radius: 13px;
  gap:5%;
  flex-wrap: wrap;
  padding:0 20px 0 20px;
`
const QualityCard=styled.div`
  width: 100%;
  max-width: 300px; 
  position: relative;
  border-radius: 13px;
  overflow: hidden;
  text-align:center;
  margin-bottom:20px;
  p{
   font-size:${props=>props.theme.textSize.medium}
  }
  @media(max-width:760px){
    h1{
      font-size:${props=>props.theme.textSize.large}
    }
  max-width: 250px; 

  }
`
const CategoryCardImageContainer=styled.div`
  width: 100%;
  aspect-ratio: 24 / 24;
  position: relative;
  border-radius: 13px;
  @media(max-width:1024px){
      
    }
  ;
`
const CatergoryCardImage=styled(Image)`
  object-fit:cover;
`
const QualitySection :React.FC=()=>{
  return(
    <QualitySectionContainer>
      <QualityCardTitleContainer>
        <h1>Nasze wyjątkowe wypieki</h1>
        <p>Nasza cukiernia oferuje szeroki wybór pysznych wypierków, które są niepowtarzalne pod względem smaku i jakości.
                    Każdy produkt jest starannie przygotowywany z najlepszych składników,
                    aby dostarczyć ci niezapomniane doznania smakowe
        </p>
      </QualityCardTitleContainer>
      <QualityCardContainer>
        <QualityCard>
          <CategoryCardImageContainer>
            <CatergoryCardImage src='/images/QualityImageAnimals.png'alt="cardimage" fill/>
          </CategoryCardImageContainer>
          <h1>Ręczne wykonanie specjałów</h1>
          <p>Każdy wypiek jest starannie przygotowywany ręcznie, co gwarantuje najwyższą jakość i unikalny charakter naszych produktów</p>
        </QualityCard>

        <QualityCard>
          <CategoryCardImageContainer>
            <CatergoryCardImage src='/images/QualityImageSingleCake.png'alt="cardimage" fill/>
          </CategoryCardImageContainer>
          <h1>Kunszt cukierniczy</h1>

          <p>Nasz zespół to doświadczeni cukiernicy, którzy wkładają serce i duszę w każdy wypiek, dbając o każdy detal</p>
        </QualityCard>

        <QualityCard>
          <CategoryCardImageContainer>
            <CatergoryCardImage src='/images/QualityImageCakes.png'alt="cardimage" fill/>
          </CategoryCardImageContainer>
          <h1>Indywidualne zamówienia</h1>

          <p>Tworzymy wypieki na specjalne zamówienie, dostosowane do indywidualnych potrzeb i preferencji naszych klientów</p>
        </QualityCard>
      </QualityCardContainer>
    </QualitySectionContainer>
  );
}

export default QualitySection;
