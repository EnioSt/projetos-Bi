import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1); /* fundo transparente */
  padding: 40px;
  border-radius: 12px; /* bordas arredondadas sutis */
  backdrop-filter: blur(10px); /* efeito de vidro fosco */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* sombra leve */
  color: #fff;
  text-align: center;
  max-width: 600px;
  gap: 30px;
  align-items: center;
  h1 {
    color: var(--cor-terciaria);
  }
  h2 {
    color: #fff;
  }
  h3 {
    color: #fff;
  }
  button {
    width: 40%;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid var(--cor-terciaria);
    background-color: transparent;
    color: var(--cor-terciaria);
    cursor: pointer;
    &:hover {
      background-color: var(--cor-primaria);
    }
  }
`;
