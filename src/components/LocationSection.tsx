import styled from "styled-components"
import Image from "next/image"
import React from "react"
const LocationSectionContainer=styled.section`
    width:100%;
    height:100vh;
    position:relative;
    overflow:hidden;
    display: flex;
    align-items:center;
    justify-content:center;
    overflow-x: auto; /* Allow horizontal scrolling */
    gap:5%;
    @media(max-width:760px) {
      flex-direction:column-reverse;
      
      padding:0 20px 0 20px
    }
`
const LocationTextContainer=styled.div`
    width:30%;
    height:100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media(max-width:760px) {
      width:100%;
      height:80%;
      flex-direction:row
    }
`
const LocationMapContainer=styled.div`
    width:60%;
    height:60%;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (max-width:760px) {
      width:100%;
    }
`
const LocationMapImage=styled(Image)`
    object-fit:cover;
    width:100%;
    height:100%;
`
const LocationSection:React.FC=()=>{
  return(
    <LocationSectionContainer>
      <LocationTextContainer>
        <div><h1>Nasza Lokacja!</h1>
          <p>Zapraszamy do Słodkiej Łyżeczki,  nasza cukiernia znajduje się w Krajnie, łatwo dostępna dla każdego, kto pragnie poczuć magię ręcznie robionych wypieków.</p>
        </div>
        <div><h4>Adres:</h4>
          <p>Krjano Pierwsze <br/>26-008 Górno</p>
        </div>
        <div><h4>Godziny Otwarcia</h4>
          <p>Poniedziałek - Czwartek: 8:00 - 16:00<br/>Piątek - Niedziela: Zamknięte (Realizacja zamówień)</p>
        </div>
        <div><h4>Skontaktuj się z nami</h4>
          <p>Telefon: xxx-xxx-xxx<br/>Email: słodkałyżeczka@mail.pl</p>
        </div>
      </LocationTextContainer>
      <LocationMapContainer><LocationMapImage src='/images/LocationSectionMapImage.png' alt='location section map image'width={100} height={100} priority/></LocationMapContainer>
    </LocationSectionContainer>
  )
}
export default LocationSection
