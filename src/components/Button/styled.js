import styled from "styled-components";


export const Button = styled.button`
  margin-right: 25px;
  padding: 0;
  box-sizing: border-box;
  width: 80px;
  height: 40px;
  background-color: #6743fa;
  color: #fff;
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  :active{
    transform: scale(1.05);
  }
`