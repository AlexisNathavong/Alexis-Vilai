import styled from 'styled-components';


//App Router
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid lightgrey;
    height: 100px;
    width: 100%;
    align-items: center;
    box-shadow: 5px 5px 8px #BFBFBF;
    background: #1C1C1C;
    
    a {
        
        margin-left: 70px;
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;


//Welcome Page
export const WelcomeHeader = styled.h1`
    font-family: 'Tangerine', cursive;
    font-weight: regular;
    font-size: 20px;
    text-align: center;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

`;

//About Page
export const AboutHeader = styled.h1`
    font-family: 'Tangerine', cursive;
    font-weight: regular;
    font-size: 20px;
    text-align: center;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
`;

export const About = styled.div`
    border: 2px solid;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 8px #D0D0D0;
    width: 65%;
    height: 500px;
    margin: 0 auto;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        height: 598px;
        width: 100%;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        height: 510px;
        width: 80%;
        
    }
    

    p {
        line-height: 30px;
        width: 80%;
        margin: 0 auto;
        margin-top: 60px;
        font-size: 18px;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 20px;
        }
        @media (max-width: 800px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 42px;
            
        }
    }

    .img-container {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 50%;
        height: 255px;
        object-fit: contain;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            width: 80%;
            height: 250px;
        }
        @media (max-width: 800px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            
        }
    }
`;
 
export const IMG = styled.div`
    .img-container {
        width: 40%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    img {
        margon: 0 auto;
        display: flex;
        justify-content: center;
    }
`;

//Welcome Page


export const Couples = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    margin-bottom: 100px;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        
    }

    .couples-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        object-fit: contain;
        justify-content: space-between;
        width: 64%;
        margin: 0 auto;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
        @media (max-width: 800px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            
        }
    }
    
    img {
        width: 30%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        object-fit: contain;
        margin-top: 20px;
        margin-bottom: 20px;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
        @media (max-width: 800px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            
        }
        
    }
`;

//Footer
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
`;

export const Contact = styled.div`
    border: solid 1px grey;
    width: 50%;
    margin: 0 auto;
    height: 160px;
    margin-top: 90px;

    h1 {
        font-size: 20px;
        text-align: center;
        text-decoration: underline;
    }

    p {
        text-align: center;
    }
`;

//NewsPage
export const News = styled.h1`
    text-align: center;
    font-size: 14px;
    font-family: lato serif;
    margin-top: 15px;
    margin-bottom: 15px;
;`

export const PastBadge = styled.div`
    .badge {
        display: flex;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
    }
`;

export const CardOne = styled.div`
    border: 2px solid;
    margin: 0 auto;
    width: 90%;
    margin-top: 80px;
    
    img {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 60px;
        width: 30%;

    }
    .card-header {
        width: 100%;
        cursor: pointer;
    }
    .accordion-toggle {
        width: 100%;
    }

;`

export const CardOneContext = styled.div`
    .card-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;