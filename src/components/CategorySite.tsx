import styled from "styled-components"
import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
interface CatergorySiteInterface{
    onClickCategoryHandler:string;
    setOnClickCategoryHandler?:(id:string)=>void
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
    width:100%;
    height:100vh;
    position:fixed;
    display: flex;
    flex-direction:column;
    align-items:center;
    background-color:black;
    z-index:10;
    margin-left:30px;
    border-top-left-radius: 20px;
    overflow-y:auto;
    visibility:${props=>(props.onClickCategoryHandler?.length<=0?'hidden':'visible')};
    @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
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
    min-height:35vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    padding: 0 20px 0 20px;
`
const CategorySiteContentSection=styled.div`
    background-color:blue;
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
    width:200px;
`
const ProductCardImage=styled(Image)`
    object-fit:cover; 
    z-index:20;
    width:200px;
    height:auto;
    aspect-ratio:8/7;
`
const ProductCardTitle=styled.h3`
    
`
const ProductCardDesc=styled.span`
    
`
const CategorySiteTitleSection =styled.h1`
    
`
const CategorySiteDescSection =styled.span`
    
`
const CategorySite :React.FC<CatergorySiteInterface>=({onClickCategoryHandler,setOnClickCategoryHandler})=>{
    const products = ProductsData[onClickCategoryHandler as keyof ProductDataInterface] || [];
    console.log( onClickCategoryHandler.length)
    return(
        <CategorySiteContainer onClickCategoryHandler={onClickCategoryHandler} >
            {setOnClickCategoryHandler && (
                <ExitButton onClick={() => setOnClickCategoryHandler('')}>
                    <BiSolidRightArrow />
                </ExitButton>
            )}
            <CategorySiteHeaderSection>
            <CategorySiteTitleSection>Wedding Cakes</CategorySiteTitleSection>
            <CategorySiteDescSection>uruchomienie ponownie komputera może rozwiązać problem zablokowanych plików lub katalogów</CategorySiteDescSection>
            </CategorySiteHeaderSection>
            <CategorySiteContentSection>
                {products.map((data,i)=>(
                    <CategorySiteContentSectionProductCardContainer key={i+data.title}>
                        <ProductCardImage src={data.img} width={150} height={150} alt="productimage" />
                        <ProductCardTitle>{data.title}</ProductCardTitle>
                        <ProductCardDesc>{data.desc.length>50?data.desc.slice(0,50)+'...':data.desc}</ProductCardDesc>
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