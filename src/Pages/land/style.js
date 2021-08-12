import styled from "styled-components";
import fundo from "../../img/fundo.svg";

export const Body = styled.body`
  display: flex;
  height: 100vh;
  align-items: center;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-around;
`;

export const Titulo = styled.h2`
  color: #f7e7dc;

  font-size: 120px;
  margin-left: 70px;
  text-shadow: 2.5px 2.5px black;
`;

export const Paragrafo = styled.p`
  font-size: 36px;
  width: 504px;
  color: white;
  height: 287px;
  margin-right: 50px;
`;

export const Button = styled.button`
  width: 174px;
  height: 53px;
  background-color: #2f294e;
  border-radius: 14px;
  border: 0;
  margin: 10px;
  color: white;
  font-size: 23px;
  
  cursor: pointer;
`;
