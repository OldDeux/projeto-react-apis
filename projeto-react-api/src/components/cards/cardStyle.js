import styled from "styled-components";
import pokebola from '../../assets/pokebola.svg'

export const Container = styled.div`
  background-color: ${(props) => { return props.color }};
  border-radius: 10px;
  background-image: url(${pokebola});
  background-size: 300px;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29vw;
  height: 35vh;
`;

export const BtnCard = styled.button`
      width: 30%;
      height: 40px;
      background-color: #FFFFFF;
      border: 0px solid;
      border-radius: 8px;
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #0F0F0F;
      cursor: pointer;
      &:hover{background-color:lightgray;}
`
export const BtnCardEx = styled.button`
      width: 30%;
      height: 40px;
      background-color: #FF6262;
      border: 0px solid;
      border-radius: 8px;
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;
      cursor: pointer;
      &:hover{background-color:lightgray;}
`
export const BtnDetails = styled.a`
      font-size: 18px;
      color: #FFFFFF;
      font-family: 'Poppins';
      text-decoration-line: underline;
      flex: none;
      display: flex;
      align-items:center;
      cursor: pointer;
      &:hover{color:black;}
`
export const ImgCard = styled.img`
      height: 200px;
      
`
export const Div1 = styled.div`
    display: flex;
    width: 100%;
    height: 65%;
    justify-content: space-between;
    color: #FFFFFF;
    
    
`
export const Div2 = styled.div`
     display: flex;
    width: 100%;
    height: 45%;
    align-items: center;
    justify-content: space-around;
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
export const Info = styled.div`
    padding-left:30px;
    gap: 10px;
`

