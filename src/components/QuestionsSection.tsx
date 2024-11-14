import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import Image from "next/image";
import React from "react";
const QuestionSectionContainer=styled.section`
    width:100%;
    height:100vh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:max-content; 
    gap:10%;
    @media(max-width:760px) {
      flex-direction:column;
     
    }
`
const QuestionSectionSideBar=styled.aside`
   width:40%;
   h1{
    font-size:${(props)=>props.theme.textSize.xlarge};
   }
   @media(max-width:760px){
    width:100%;
    padding:0px 20px 0 20px;
    display:flex;
    h1{
      margin-top:20px;
      font-size:${props=>props.theme.textSize.large};
    }
    p{
      font-size:${props=>props.theme.textSize.medium}
    }
   }
   @media(max-width:480px) {
    h1{
      margin-top:10px;
    }
   }
`
const QuestionSectionContainerQuestionCard=styled.article`
width:40%;
@media(max-width:760px){
  width:100%;
  padding:0px 20px 0 20px;
}
`
const QusetionSecitionImageContainer=styled.div`
    position:relative;
    width:100%;
    aspect-ratio:3/4;
    max-width:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (max-width:760px) {
      aspect-ratio:3/3;
      max-width:250px;
      min-width:150px;
    }
    
`
const QuestionSectionImage=styled(Image)`
    object-fit:cover;
    width:100%;
    height: 100%;
`
const QuestionsSection :React.FC=()=>{
  const questionData=[
    {question:'Jakie są wasze godziny otwarcia?',
      answer:'Nasza cukiernia jest dostępna do kontaktu od poniedziałku do czwartku, w godzinach od 8:00 do 16:00. W tych dniach z przyjemnością odpowiadamy na wszystkie Wasze pytania, przyjmujemy zamówienia i służymy pomocą.W piątki, soboty i niedziele koncentrujemy się na realizacji zamówień, aby dostarczyć Wam nasze ręcznie robione, świeże i wyjątkowe wypieki na czas',
    },
    {question:'Czy można u Was zamówić tort na specjalne zamówienie?',
      answer:'Tak, oferujemy torty na specjalne zamówienie. Skontaktuj się z nami, aby omówić szczegóły.',
    },
    {question:'Czy oferujecie dostawę?',
      answer:'Tak, oferujemy dostawę naszych wypieków na terenie [Twoja lokalizacja]. Skontaktuj się z nami, aby dowiedzieć się więcej.',
    },
    {question:'Jak wcześnie muszę złożyć zamówienie na tort?',
      answer:'Zalecamy składanie zamówień na torty co najmniej tydzień wcześniej, abyśmy mogli zapewnić najlepszą jakość i realizację.',
    }
  ]

  return (
    <QuestionSectionContainer>
      <QuestionSectionSideBar>
        <div><h1>Najczęstsze Pytania</h1>
          <p>Znajdź odpowiedzi na najczęściej zadawane pytani dotyczące naszych wypieków. Nie trać czasu i uzyskaj odpowiedz na nutrujące pytania</p></div>
        <QusetionSecitionImageContainer>
          <QuestionSectionImage src='/images/MisQuestioSeciton.png' alt='mis qustion section' width={100}height={100}/>
        </QusetionSecitionImageContainer>
      </QuestionSectionSideBar>
      <QuestionSectionContainerQuestionCard>
        {questionData.map((data,i)=><QuestionCard key={data.question+i} question={data.question} answer={data.answer}/>)}
      </QuestionSectionContainerQuestionCard>
    </QuestionSectionContainer>
  )
}

export default QuestionsSection
