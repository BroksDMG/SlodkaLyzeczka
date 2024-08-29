import styled from "styled-components"
import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";
interface CatergorySiteInterface{
    onClickCategoryHandler:string;
}
interface productDataInterface{
    [key: string]: Array<{img:string;title:string;desc:string;}>;
    WeedingCakes:Array<{img:string;title:string;desc:string;}>;
    BirthdayCakes:Array<{img:string;title:string;desc:string;}>;
    OccasionalSweets:Array<{img:string;title:string;desc:string;}>;
    CupCakes:Array<{img:string;title:string;desc:string;}>;
    SeetTables:Array<{img:string;title:string;desc:string;}>;
}

const CategorySiteContainer=styled.section`
    width:100%;
    height:100vh;
    position:sticky;
    /* overflow:hidden; */
    display: flex;
    flex-direction:column;
    align-items:center;
    background-color:black;
    z-index:10;
    margin-left:30px;
    border-top-left-radius: 20px;
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
    position:absolute;
    top:20px;
    left:-20px;
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
    background-color:green;
    height:60vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const CategorySiteContentSection=styled.div`
    background-color:blue;
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    overflow-y:hidden;
    justify-content:center;
    padding:20px;
`
const CategorySiteContentSectionProductCardContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`
const ProductCardImage=styled(Image)`
    object-fit:cover; 
    z-index:20;
    width:200px;
    height:auto;
    aspect-ratio:8/7;
`
const CategorySite :React.FC<CatergorySiteInterface>=({onClickCategoryHandler})=>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <CategorySiteContainer>
            <ExitButton onClick={()=>setIsOpen(open=>!open)}><BiSolidRightArrow/></ExitButton>
            <CategorySiteHeaderSection>
            
            </CategorySiteHeaderSection>
            <CategorySiteContentSection>
                {ProductsData[onClickCategoryHandler]?.map((data,i)=>(
                    <CategorySiteContentSectionProductCardContainer key={i+data.title}>
                        <ProductCardImage src={data.img} width={150} height={150} alt="productimage" />
                        <p>{data.title}</p>
                    </CategorySiteContentSectionProductCardContainer>
                ))}
            </CategorySiteContentSection>
        </CategorySiteContainer>
    )
} 

export default CategorySite


const ProductsData:productDataInterface={
    WeedingCakes:[
        {
            img:'/images/products/weedingCakes/image 2.png',
            title:'Biała Róża',
            desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
        },
        {
            img:'/images/products/weedingCakes/image 3.png',
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
        },
        {
            img:'/images/products/weedingCakes/image 2.png',
            title:'Biała Róża',
            desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
        }
    ],
    BirthdayCakes:[{
        img:'/images/products/weedingCakes/image 2.png',
        title:'Biała Róża',
        desc:'Jeśli żadne z powyższych kroków nie pomaga, uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów.'
    },],
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