import styled from "styled-components";
import fundo from "../../img/fundo.svg";
import fundomobile from "../../img/fundomobile.svg";

export const Body = styled.body`
  display: flex;
  height: 100vh;
  align-items: center;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-around;

  @media (max-width: 1148px) {
    background-image: url(${fundomobile});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    display: inline-block;
  }
`;

export const Titulo = styled.h2`
  color: #f7e7dc;
  font-family: "Alfa Slab One", cursive;
  font-size: 95px;
  margin-left: 90px;
  text-shadow: 2.5px 2.5px black;

  @media (max-width: 1148px) {
    font-size: 50px;
    margin: 140px 0 0 0;
    text-align: center;
  }
`;

export const Box = styled.div`
  text-align: center;
  margin-right: 50px;

  @media (max-width: 1148px) {
    margin: 130px auto;
  }
`;

export const Paragrafo = styled.p`
  font-size: 31px;
  width: 504px;
  color: white;
  height: 287px;
  font-family: "Fauna One", serif;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 1148px) {
    display: none;
  }
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

  @media (max-width: 1148px) {
    width: 140px;
    height: 43px;
    border-radius: 10px;
    font-size: 22px;
  }
`;
