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
  font-family: "Alfa Slab One", cursive;
  font-size: 95px;
  margin-left: 90px;
  text-shadow: 2.5px 2.5px black;
`;

export const Box = styled.div`
  text-align: center;
  margin-right: 50px;
`;

export const Paragrafo = styled.p`
  font-size: 36px;
  width: 504px;
  color: white;
  height: 287px;
  font-family: "Fauna One", serif;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 174px;
  height: 63px;
  background-color: #2f294e;
  border-radius: 14px;
  border: 0;
  margin: 15px;
  color: white;
  font-size: 32px;
  font-family: "Fauna One", serif;
  cursor: pointer;
`;
