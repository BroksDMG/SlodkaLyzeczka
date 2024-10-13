import styled from "styled-components"
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import React from "react";
interface CatergorySiteInterface{
    onClickCategoryHandler:string;
    setOnClickCategoryHandler?:(id:string)=>void;
    productDetailData?:object;
}
interface Product {
    img: string;
    title: string;
    desc: string;
}

interface ProductDataInterface {
    [key: string]: Product[];
    WeedingCakes: Product[];
    BirthdayCakes: Product[];
    OccasionalSweets: Product[];
    CupCakes: Product[];
    SeetTables: Product[];
}

const CategorySiteContainer=styled.section<CatergorySiteInterface>`
    width:95%;
    height:100vh;
    position:fixed;
    display: flex;
    flex-direction:column;
    align-items:center;
    background-color:black;
    z-index:10;
    margin-left:5%;
    border-top-left-radius: 20px;
    overflow-y:auto;
    visibility:hidden;
    background-color:${props=>props.theme.colors.gray};
    
    @keyframes fadeIn {
    from {
        visibility:hidden;
        opacity: 0;
        transform: translateX(540px);
    }
    to {
        visibility:visible;
        opacity: 1;
        transform: translateX(0);
    }
    }

    @keyframes fadeOut {
        from {
            visibility:visible;
            opacity: 1;
            transform: translateX(0);
        }
        to {
            visibility:hidden;
            transform: translateX(540px);
            opacity: 0;
        }
    }
    animation: ${props=>(props.onClickCategoryHandler?.length<=0? 'fadeOut' : 'fadeIn')} 0.5s ease-in-out forwards;

`
const ExitButton=styled.button`
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:${(props)=>props.theme.textSize.xlarge};
    color:${(props)=>props.theme.colors.gold};
    position:fixed;
    top:20px;
    left:0px;
    z-index:10;
    padding-left:4px;
    border: none;
    cursor: pointer;
    background-color: red;
    @keyframes slideIn {
        from{
            transform:translateX(0%);
            background-color:red;
        }
        to{
            transform:translateX(5%);
            background-color:blue
        }
    }
    &:hover{
        animation: slideIn 0.5s ease-in forwards;
    }
    

    /* opacity:100%; */
    /* box-shadow:inset 20px 20px 20px rgba(0,0,0,0,0.05),25px 35px 20px rgba(0,0,0,0,0.05), 25px 30px 30px rgba(0,0,0,0,0.05), inset -20px -20px 25px rgba(255,255,255,0.9); */
`
const CategorySiteHeaderSection=styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    padding-top: 20px;
`
const CategorySiteContentSection=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content:center;
    padding:20px;
`
const CategorySiteContentSectionProductCardContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    cursor: pointer;
    &:hover{
    transform:scale(1.02);
    transition-property: transform;
    transition-duration: 0.3s, 0.5s;
    }
`
const ProductCardImage=styled(Image)`
    border-top-left-radius:3%;
    border-top-right-radius:3%;
    object-fit:cover; 
    z-index:20;
    width:300px;
    height:auto;
    aspect-ratio:8/7;
    box-shadow: 2px 5px 15px 2px ${props=>props.theme.colors.blackShadow};
`
const MainBirhdayCakeImage = styled(Image)`
    object-fit: cover;
    height: auto;
    width: 100%;
    object-position: center 57%;
    aspect-ratio: 10 / 3;
`
const ProductCardTitle=styled.h3` 
    text-shadow: 2px 3px 6px ${props => props.theme.colors.textBlackShadow};
`
const ProductCardDesc=styled.span`
     text-shadow: 2px 4px 4px ${props => props.theme.colors.textBlackShadow};
`
const CategorySiteTitleSection =styled.div`
    position: absolute;
    width:100%;
  background-color: rgba(255, 255, 255, 0.7);  /* Białe półprzezroczyste tło (70% przezroczystości) */
  color: ${props=>props.theme.colors.goldIntense}; 
  font-size: 34px;  
  font-weight: bold; 
  text-align: center; 
`

const MainImageCoitainer=styled.div`
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width:100%;
`
const CategorySiteDescSection =styled.span`
   background-color: #f0f0f0;  /* Delikatne tło, aby wyróżnić tekst */
   width:100%;
  padding: 40px 30px;  /* Duże wewnętrzne odstępy dla przestrzeni */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  /* Subtelny cień dla efektu unoszenia */
  span{
    font-weight:bold;
    margin-bottom:10px;
    display:block
  }
  p{
    margin-top:30px
  }
  //button
  div{
    margin-top:20px;
    width:80%;
    display:flex;
    justify-content:center;
  }
  a{
    display: inline-flex;
    width:max-content;
        align-items: center;
        background-color:${props=>props.theme.colors.goldIntense};
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        text-decoration: none;
        font-size: 1.2rem;
        transition: background-color 0.3s ease;
  }
  
`
const InstagramIcon = styled(FaLocationArrow )`
  margin-left: 10px;   
  font-size: 24px;      
  transform: translateY(2px);
`;
const CategorySite :React.FC<CatergorySiteInterface>=({onClickCategoryHandler,setOnClickCategoryHandler})=>{
  const products = ProductsData[onClickCategoryHandler as keyof ProductDataInterface] || [];

  return(
    <CategorySiteContainer onClickCategoryHandler={onClickCategoryHandler} >
      {setOnClickCategoryHandler && (
        <ExitButton onClick={() => setOnClickCategoryHandler('')}>
          <BiSolidRightArrow />
        </ExitButton>
      )}
      <CategorySiteHeaderSection>
        <MainImageCoitainer>
          <CategorySiteTitleSection>Torty Urodzinowe</CategorySiteTitleSection>
          <MainBirhdayCakeImage src={'/images/products/birhdayCakes/MainBirhdayCakeImage.jpg'} width={1024} height={1024} alt="mainbirthdayimage" />
        </MainImageCoitainer>
        <CategorySiteDescSection>
          <span>W tym miejscu znajdziesz inspiracje na wyjątkowe torty urodzinowe! </span>
          <p>Oferujemy szeroki wybór wzorów i smaków, które uczynią każdą uroczystość niezapomnianą.<br/>
                Przejrzyj nasze przykładowe realizacje, a jeśli masz swój własny pomysł, chętnie zrealizujemy Twoje marzenie.</p>
          <p>
                Napisz do nas, a wspólnie stworzymy tort idealnie dopasowany do Twoich potrzeb!
          </p>
          <div>
            <a href="https://www.instagram.com/twoje_konto_na_instagramie" target="_blank" rel="noopener noreferrer" className="instagram-button">
                    Wyślij swoją propozycje
              <InstagramIcon />
            </a>
          </div>
        </CategorySiteDescSection>

      </CategorySiteHeaderSection>
      <CategorySiteContentSection>
        {products.map((data,i)=>(
          <CategorySiteContentSectionProductCardContainer key={i+data.title} onClick={()=>setProductDetailData(data)}>
            <ProductCardImage src={data.img} width={150} height={150} alt="productimage" />

          </CategorySiteContentSectionProductCardContainer>
        ))}
      </CategorySiteContentSection>
    </CategorySiteContainer>
  )
}

export default CategorySite

const ProductsData:ProductDataInterface={
  WeedingCakes:[
    {
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga'
    },
    {
      img:'/images/products/weedingCakes/image 3.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga'
    },
    {
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    }
  ],
  BirthdayCakes:[
    {
      img:'/images/products/birhdayCakes/438785376_18432739567025106_8958186019059700531_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/449771117_18445963351025106_4722096168469771803_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/451705491_18448894129025106_1319351217688146439_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/455247671_18453654796025106_6588465313754245470_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },//
    {
      img:'/images/products/birhdayCakes/455247671_18453654796025106_6588465313754245470_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/457870078_18457483537025106_3007933157330030962_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/458712063_18458444308025106_5156054030466713806_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/460017699_18460268683025106_6907721994053293721_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/461031148_18461603164025106_5223958142573169967_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/461249839_18461881108025106_3844387896724744961_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
    {
      img:'/images/products/birhdayCakes/461249839_18461881108025106_3844387896724744961_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },
  ],
  OccasionalSweets:[{
    img:'/images/products/weedingCakes/image 2.png',
    title:'Biała Róża',
    desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
  },],
  CupCakes:[{
    img:'/images/products/weedingCakes/image 2.png',
    title:'Biała Róża',
    desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
  },],
  SeetTables:[{
    img:'/images/products/weedingCakes/image 2.png',
    title:'Biała Róża',
    desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
  },]
}
