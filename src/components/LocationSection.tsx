import styled from "styled-components";
import Image from "next/image";
import React from "react";
const LocationSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  gap: 30%;
  padding: 0 42px 0 42px;
  @media (max-width: 760px) {
    padding: 0 20px 0 20px;
  }
`;
const LocationTextContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  & > div:nth-of-type(1) {
    margin-bottom: 20px;
  }
  & > div:nth-of-type(n + 2) {
    display: flex;
    flex-wrap: wrap;
    line-height: 25px;
    justify-content: space-between;
  }
`;
const LocationMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const LocationMapImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const LocationSection: React.FC = () => {
  return (
    <LocationSectionContainer>
      <LocationTextContainer>
        <div>
          <h1>Nasza Lokacja!</h1>
          <p>
            Zapraszamy do Słodkiej Łyżeczki, nasza cukiernia znajduje się w
            Krajnie, łatwo dostępna dla każdego, kto pragnie poczuć magię
            ręcznie robionych wypieków.
          </p>
        </div>
        <div>
          <div>
            <h4>Adres:</h4>
            <p>
              Krjano Pierwsze <br />
              26-008 Górno
            </p>
          </div>
          <div>
            <h4>Godziny Otwarcia</h4>
            <p>
              Pon - Czw 8:00 - 16:00
              <br />
              Pt - Nd: Zamknięte
            </p>
          </div>
          <div>
            <h4>Skontaktuj się z nami</h4>
            <p>
              Telefon: xxx-xxx-xxx
              <br />
              Email: słodkałyżeczka@mail.pl
            </p>
          </div>
        </div>
      </LocationTextContainer>
      <LocationMapContainer>
        <LocationMapImage
          src="/images/LocationSectionMapImage.png"
          alt="location section map image"
          width={100}
          height={100}
          priority
        />
      </LocationMapContainer>
    </LocationSectionContainer>
  );
};
export default LocationSection;
