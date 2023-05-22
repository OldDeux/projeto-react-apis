import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  height: 110px;
  font-size: 24px;
  font-weight: 700;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 20vw;
    height: 10vh;
  }
  button {
    position: absolute;
    background-color: #33A4F5;
    color: white;
    right:3%;
    border-radius: 8px;
    height: 50px;
    width: 190px;
    padding: 0 4px;
    border: 0px solid;
    font-size: 20px;
    cursor: pointer;
    &:hover{
    background-color:#FF6262;
  }
  }
  a {
    position: absolute;
    font-size: 25px;
    left:3%;
    text-decoration-line: underline;
    cursor: pointer;
    &:hover{color:#33A4F5;};
  }
  
`;
