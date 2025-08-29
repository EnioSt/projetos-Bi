import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 10px;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
  border: 4px solid var(--cor-terciaria);
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1 1 300px; /* flexível com mínimo de 300px */
    max-width: 100%;

    h2 {
      color: var(--cor-terciaria);
      font-size: 1.2rem;
      text-align: center;
    }

    iframe {
      width: 100%;
      height: 300px;
      border: none;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      iframe {
        height: 250px;
      }
    }
  }
`;
