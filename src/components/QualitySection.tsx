import styled from "styled-components";
import Image from "next/image";
import React from "react";
const QualitySectionContainer=styled.section`
    width:100%;
    height:100vh;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:${(props)=>props.theme.spacing.xlarge};
    margin-right:${(props)=>props.theme.spacing.xlarge};
    overflow:hidden;
    gap:10%;
`
const QualityCardTitleContainer=styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
`
const QualityCardTitle=styled.h1`
    font-size:${(props)=>props.theme.textSize.xlarge};
`
const QualityCardContainer=styled.ul`
    width:100%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    border-radius: 13px;
    gap:5%;
`

const CategoryCardImageContainer=styled.div`
    width: 100%;
    max-width: 300px;
  aspect-ratio: 24 / 24;
  position: relative;
  border-radius: 13px;
  overflow: hidden;
`

const CatergoryCardImage=styled(Image)`
   width: 100%;
  height: 100%;
  object-fit:cover;
  position: absolute;
  top: 0;
  left: 0;
`
const QualityCard=styled.div`
    width: 100%;
    max-width: 300px;
    position: relative;
  border-radius: 13px;
  overflow: hidden;
  text-align:center;
`
const QualitySection :React.FC=()=>{

  return(
    <QualitySectionContainer>
      <QualityCardTitleContainer>
        <QualityCardTitle>Nasze wyjątkowe wypieki</QualityCardTitle>
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
          <h1>Indywidualne zamówienia</h1>

          <p>Tworzymy wypieki na specjalne zamówienie, dostosowane do indywidualnych potrzeb i preferencji naszych klientów</p>
        </QualityCard>
        <QualityCard>
          <CategoryCardImageContainer>
            <CatergoryCardImage src='/images/QualityImageCakes.png'alt="cardimage" fill/>
          </CategoryCardImageContainer>
          <h1>Kunszt cukierniczy</h1>

          <p>Nasz zespół to doświadczeni cukiernicy, którzy wkładają serce i duszę w każdy wypiek, dbając o każdy detal</p>
        </QualityCard>

      </QualityCardContainer>
    </QualitySectionContainer>
  );
}

export default QualitySection;
