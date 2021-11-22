import styled from "styled-components";

export const Input = styled.input`
  color: #fff;
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  max-width: 600px;
  height: 40px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 10px 0 20px;
  margin-left: 25px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  :focus {
    outline: none;
  }
`