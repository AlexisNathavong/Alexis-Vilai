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

`;

//About Page
export const AboutHeader = styled.h1`
    font-family: 'Tangerine', cursive;
    font-weight: regular;
    font-size: 20px;
    text-align: center;
`;

export const About = styled.div`
    border: 2px solid;
    background-color: #FFDADA;
    box-shadow: 8px 8px 8px #D0D0D0;
    width: 85%;
    height: 900px;
    margin: 0 auto;
    

    p {
        line-height: 30px;
        width: 80%;
        margin: 0 auto;
        margin-top: 60px;
        font-size: 18px;
    }

    .img-container {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 50%;
        height: 500px;
        object-fit: contain;
    }
`;
 
//Welcome Page
export const Family = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;

    .family-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        object-fit: contain;
        justify-content: space-between;
        width: 64%;
        margin: 0 auto;
        
    }
    
    img {
        width: 30%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        object-fit: contain;
        margin-top: 20px;
        margin-bottom: 20px;

        
    }
`;

export const Couples = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    margin-bottom: 100px;

    .couples-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        object-fit: contain;
        justify-content: space-between;
        width: 64%;
        margin: 0 auto;
    }
    
    img {
        width: 30%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        object-fit: contain;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

