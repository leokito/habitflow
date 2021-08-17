import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerGradiente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f294e;
  background-image: linear-gradient(
    0deg,
    #2f294e 0%,
    #544e74 33%,
    #656081 66%,
    #464162 100%
  );

  width: 45vw;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 397px;
  height: 505px;
  padding: 40px;
  background-color: #eadeda;
  border-radius: 30px;

  p {
    font-weight: lighter;
  }
`;

export const ContainerPurple = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f294e;
  width: 55vw;
  height: 100vh;

  h1 {
    font-size: 80px;
    color: #f7e7dc;
  }
`;

export const Button = styled.button`
  width: 176px;
  background-color: #2f294e;
  margin: 15px auto;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
`;
