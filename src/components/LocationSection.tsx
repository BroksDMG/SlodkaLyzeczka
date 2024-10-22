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
`
const LocationTextContainer=styled.div`
    width:30%;
    height:100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const LocationMapContainer=styled.div`
    width:60%;
    height:60%;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const LocationMapImage=styled(Image)`
    width:100;
    object-fit:cover;
`
const LocationSection:React.FC=()=>{
  return(
    <LocationSectionContainer>
      <LocationTextContainer>
        <h1>Nasza Lokacja!</h1>
        <p>Zapraszamy do Słodkiej Łyżeczki,  nasza cukiernia znajduje się w Krajnie, łatwo dostępna dla każdego, kto pragnie poczuć magię ręcznie robionych wypieków.</p>
        <h4>Adres:</h4>
        <p>Krjano Pierwsze</p>
        <p>26-008 Górno</p>
        <h4>Godziny Otwarcia</h4>
        <p>Poniedziałek - Czwartek: 8:00 - 16:00</p>
        <p>Piątek - Niedziela: Zamknięte (Realizacja zamówień)</p>
        <h4>Skontaktuj się z nami</h4>
        <p>Telefon: xxx-xxx-xxx</p>
        <p>Email: słodkałyżeczka@mail.pl</p>
      </LocationTextContainer>
      <LocationMapContainer><LocationMapImage src='/images/LocationSectionMapImage.png' alt='location section map image' fill/></LocationMapContainer>
    </LocationSectionContainer>
  )
}
export default LocationSection
