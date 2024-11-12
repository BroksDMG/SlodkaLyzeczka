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
    margin-right:${(props)=>props.theme.spacing.xlarge};
    gap:10%;
`
const QuestionSectionSideBar=styled.aside`
   width:20em;
   height:50vh;
   position:relative;

`
const QuestionSectionContainerQuestionCard=styled.article`
width:40%;
`
const QusetionSecitionImageContainer=styled.div`
     width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
`
const QuestionSectionImage=styled(Image)`
    object-fit:cover;
`
const QuestionSectionTitle=styled.h1`
    font-size:${(props)=>props.theme.textSize.xxlarge};
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
        <QuestionSectionTitle>Najczęstsze Pytania</QuestionSectionTitle>
        <p>Znajdź odpowiedzi na najczęściej zadawane pytani dotyczące naszych wypieków. Nie trać czasu i uzyskaj odpowiedz na nutrujące pytania</p>
        <QusetionSecitionImageContainer>

          <QuestionSectionImage src='/images/MisQuestioSeciton.png' alt='mis qustion section' fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </QusetionSecitionImageContainer>
      </QuestionSectionSideBar>
      <QuestionSectionContainerQuestionCard>
        {questionData.map((data,i)=><QuestionCard key={data.question+i} question={data.question} answer={data.answer}/>)}
      </QuestionSectionContainerQuestionCard>
    </QuestionSectionContainer>
  )
}

export default QuestionsSection
