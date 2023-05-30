import styled from "styled-components";
import pokebola from '../../assets/pokebola.svg'
/* export const Container = styled.div`
   
    display: flex;
    gap: 8px;
    background-color: #5E5E5E;
    min-height: 100vh;
  
`; */

export const Container = styled.div`
    background-color: #5E5E5E;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
    h1{
    font-family: 'Poppins', sans-serif;
    color:#ffff;
    position: relative;
    top:50%;
}
`

export const ContainerDetail = styled.div`
    background-color: ${(props) => { return props.color }};
    background-image: url(${pokebola});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    opacity: 0.9;
    position: relative;
    width: 85%;
    height: 75%;
    top: 5%;
    border-radius: 20px;
    display: flex;        
`

export const ImgFront_Back = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 6%;
    div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;
        height: 40%;
        img{
            width: 100%; 
        }
    }
    div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;
        height: 40%;
        img{
            width: 100%; 
        }
    }   
`

export const BaseStats = styled.div`
    background-color: #ffff;
    border-radius: 10px;
    width: 25%;
    height: 80%;
    position: relative;
    top: 7%;
    right: 1%;
    display: flex;
    flex-direction: column;
    
    
    h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        position: relative;
        
    }
   div{
        color: #5d5d5d;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        position: relative;  
        
   }
    hr{
        width: 80%;
        position: relative;
        
    }
    h5{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        position: relative;
        left: 5%;
        
    }
    p{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        position: relative;
        
    }
`

export const InfoAndMoves = styled.div`
    position: relative;
    width: 30%;
    height: 25%;
    left: 1%;
    
    
`

export const ContainerMoves = styled.div`
    background-color: #Ffff;
    border-radius: 9px;
    position: relative;
    width: 100%;
    height: 206%;
    top: 46%;
    display: flex;
    flex-direction: column;
    
    
    h2{
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
   
    
`

export const Id = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #ffff;
    position: relative;
    top: 150%;  
`

export const TypeMoves = styled.p`
    background-color: #ececec;
    border: dashed #dbdbdb 2px;
    border-radius: 5px;
    font-size: 1rem;
    position: relative;
    left: 30%;
    font-family: 'Roboto', sans-serif;
    width: 39%;
    text-align: center;  
`

export const ImgOfficial = styled.div`
    width: 20%;
    img {
    width:18%;
    position: absolute;
    bottom: 70%;
    left: 80%;
   }
`

export const ProgressBarContainer = styled.div`
    background-color: lightgrey;
    width: 100%;
    border-radius: 50px;
    position: relative;
    left: 5%;
`

export const ProgressBar = styled.div`
    background-color: ${(props) => { return props.color }};
    font-size: 0.6rem;
    border-radius: 50px;
    width: ${({ progress }) => progress}%;
`
export const Type = styled.div`
      width: 80px;
      height: 40px;
      display: flex;
      align-items:center;
      justify-content: center;
      background-color: ${(props) => { return props.color }};
      color: #FFFFFF;
      border: 1.5px lightgray dashed;
      border-radius: 10px;
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      gap: 10px;
`
export const Types = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;
`
export const Div = styled.div`
    
    width: 90%;
    height: 75%;
`

export const H5 = styled.h5`
    width: 100%;
    height: 0px;
`

export const Div2 = styled.div`
    
    width: 100%;
    height: 8%;
`