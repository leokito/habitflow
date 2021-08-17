import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const ContainerPurple = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #2f294e;
  display: flex;
  justify-content: center;
  align-items: baseline;

  h1 {
    font-size: 50px;
    color: #f7e7dc;
  }

  @media (min-width: 992px) {
    height: 100vh;
    width: 55vw;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 80px;
    }
  }
`;

export const ContainerGradiente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    #2f294e 0%,
    #544e74 33%,
    #656081 66%,
    #464162 100%
  );

  @media (min-width: 992px) {
    height: 100vh;
    width: 45vw;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  background-color: #eadeda;
  border-radius: 30px;
  width: 292px;
  height: 504px;
  padding: 40px;

  @media (min-width: 576px) {
    width: 397px;
    height: 505px;
  }

  p {
    font-weight: lighter;
  }
`;

export const Button = styled.button`
  background-color: #2f294e;
  margin: 15px auto;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  width: 176px;
`;
