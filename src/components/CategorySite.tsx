import styled,{keyframes} from "styled-components"
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import theme from "@/styles/theme";
import React from "react";

interface CatergorySiteInterface{
    categoryId:string;
    setCategoryId?:(id:string)=>void;
    productDetailData?:object;
}
interface Product {
    categoryTitle:string,
    subTittle:string,
    categorySiteDescription:string,
    buttonDesc:string,
    color:string,
    categoryImage:string,
    categoryGallery:{
        img: string;
        title: string;
        desc: string;
    }[]
}

interface ProductDataInterface {
    [key: string]: Product;
    WeedingCakes: Product;
    BirthdayCakes: Product;
    OccasionalSweets: Product;
    CupCakes: Product;
    SeetTables: Product;
}

const CategorySiteContainer=styled.section<{$categoryId:string}>`
    width:95%;
    height:100vh;
    position:fixed;
    display: flex;
    flex-direction:column;
    align-items:center;
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
    animation: ${props=>(props.$categoryId?.length<=0? 'fadeOut' : 'fadeIn')} 0.5s ease-in-out forwards;

`
const Test=styled.div`
    
        z-index:15;
        position:relative;
        overflow-y:auto;
    
`

const CategorySiteContentSection=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    margin-top: 20px;
    justify-content:center;
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
    z-index:10;
    width:300px;
    height:auto;
    aspect-ratio:8/7;
    box-shadow: 2px 5px 15px 2px ${props=>props.theme.colors.blackShadow};
`
const MainImage = styled(Image)`
    object-fit: cover;
    height: auto;
    width: 100%;
    object-position: center 57%;
    aspect-ratio: 10 / 3;
`
const CategorySiteHeaderSection=styled.div<{$bgColor:string}>`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    div{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width:100%;
    h1{
    position: absolute;
    width:100%;
    background-color: rgba(255, 255, 255, 0.7);  
    color: ${props=>props.$bgColor||props.theme.colors.goldIntense}; 
    font-size: 34px;  
    font-weight: bold; 
    text-align: center;
    }
    }
`

const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;
const ExitButton=styled.button<{$bgColor:string}>`
    font-size:${(props)=>props.theme.textSize.xlarge};
    color:${(props)=>props.theme.colors.textWhite};
    background-color:${props=>props.$bgColor};
    border: none;
    border-top-right-radius:30%;
    border-bottom-right-radius:30%;                          
    padding: 10px 15px 10px 32px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;                       
    position:fixed;                              
    opacity: 0.8;                               
    top:40px;
    left:0px;
    z-index:20;
    &:hover {
    animation: ${grow} 0.9s forwards;                                
    opacity: 0.9;   
  }
`

const CategorySiteDescSection =styled.span<{$bgColor:string}>`
   background-color: #f0f0f0; 
   width:100%;
  padding: 40px 30px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  
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
    background-color:${props=>props.$bgColor};
    color: white;
    padding: 5px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    &:hover {
    /* Zwiększona przezroczystość przy hoverze */
    animation: ${grow} 0.3s forwards;           /* Powiększenie przy hover */
    opacity: 0.9;                             
  }
  }
  
`
const InstagramIcon = styled(FaLocationArrow )`
  margin-left: 10px;   
  font-size: 24px;      
  transform: translateY(2px);
`;
const CategorySite :React.FC<CatergorySiteInterface>=({categoryId,setCategoryId})=>{
  const productsSiteData = ProductsData[categoryId as keyof ProductDataInterface] || {};
  return(
    <CategorySiteContainer $categoryId={categoryId} >
      <Test>{setCategoryId && (
        <ExitButton onClick={() => setCategoryId('')}$bgColor={productsSiteData.color}>
          <BiSolidRightArrow />
        </ExitButton>
      )}
      <CategorySiteHeaderSection $bgColor={productsSiteData.color}>
        <div>
          <h1>{productsSiteData.categoryTitle}</h1>
          <MainImage src={productsSiteData?.categoryImage} width={1024} height={1024} alt="mainbirthdayimage" />
        </div>
        <CategorySiteDescSection $bgColor={productsSiteData.color}>
          <span>W tym miejscu znajdziesz inspiracje na wyjątkowe torty urodzinowe! </span>
          <p>Oferujemy szeroki wybór wzorów i smaków, które uczynią każdą uroczystość niezapomnianą.<br/>
                Przejrzyj nasze przykładowe realizacje, a jeśli masz swój własny pomysł, chętnie zrealizujemy Twoje marzenie.</p>
          <p>
                Napisz do nas, a wspólnie stworzymy tort idealnie dopasowany do Twoich potrzeb!
          </p>
          <div>
            <a href="https://www.instagram.com/direct/t/105916064139736" target="_blank" rel="noopener noreferrer" className="instagram-button">
                    Wyślij swoją propozycje
              <InstagramIcon />
            </a>
          </div>
        </CategorySiteDescSection>

      </CategorySiteHeaderSection>
      <CategorySiteContentSection>
        {productsSiteData?.categoryGallery?.map((data,i)=>(
          <CategorySiteContentSectionProductCardContainer key={i+data.title} >
            <ProductCardImage src={data.img} width={150} height={150} alt="productimage" />

          </CategorySiteContentSectionProductCardContainer>
        ))}
      </CategorySiteContentSection></Test>
    </CategorySiteContainer>
  )
}

export default CategorySite

const ProductsData:ProductDataInterface={
  WeedingCakes:{
    categoryTitle:'Torty Ślubne',
    subTittle:'w tym miejscu znajdziesz torty',
    categorySiteDescription:'oferujemy fajne torty, zobacz niżej',
    buttonDesc:'Napisz do nas będzie fajnie',
    color:theme.colors.lightBeige,
    categoryImage:'/images/products/birhdayCakes/MainBirhdayCakeImage.jpg',
    categoryGallery:[
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
    ]
  },
  BirthdayCakes:{
    categoryTitle:'Torty Urodzinowe',
    subTittle:'w tym miejscu znajdziesz torty',
    categorySiteDescription:'oferujemy fajne torty, zobacz niżej',
    buttonDesc:'Napisz do nas będzie fajnie',
    color:theme.colors.goldIntense,
    categoryImage:'/images/products/birhdayCakes/MainBirhdayCakeImage.jpg',
    categoryGallery:[
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
    ]},
  OccasionalSweets:{categoryTitle:'Słodkości Okazjonalne',
    subTittle:'w tym miejscu znajdziesz torty',
    categorySiteDescription:'oferujemy fajne torty, zobacz niżej',
    buttonDesc:'Napisz do nas będzie fajnie',
    color:theme.colors.beige,
    categoryImage:'/images/products/occasionalSweets/mainOcasionalSweets.jpg',
    categoryGallery:[{
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },]},
  CupCakes:{categoryTitle:'Babeczki',
    subTittle:'w tym miejscu znajdziesz torty',
    categorySiteDescription:'oferujemy fajne torty, zobacz niżej',
    buttonDesc:'Napisz do nas będzie fajnie',
    color:theme.colors.pink,
    categoryImage:'/images/products/birhdayCakes/MainBirhdayCakeImage.jpg',
    categoryGallery:[{
      img:'/images/products/cupCakes/362297710_18377495314025106_2276399099688762547_n.jpg',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },]},
  SeetTables:{categoryTitle:'Słodkie Stoły',
    subTittle:'w tym miejscu znajdziesz torty',
    categorySiteDescription:'oferujemy fajne torty, zobacz niżej',
    buttonDesc:'Napisz do nas będzie fajnie',
    color:theme.colors.beige,
    categoryImage:'/images/products/sweetTables/353072720_269987585561093_6036878025131667799_n.jpg',
    categoryGallery:[{
      img:'/images/products/weedingCakes/image 2.png',
      title:'Biała Róża',
      desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },]}
}
