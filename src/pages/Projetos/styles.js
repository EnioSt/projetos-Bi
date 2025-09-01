import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 20px;
  box-sizing: border-box;
`;

export const FlexList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 20px;
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  overflow-y: auto;
  border: 4px solid var(--cor-terciaria);
  border-radius: 12px;
  box-sizing: border-box;
`;

export const Card = styled.li`
  flex: 1 1 280px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;
  text-align: center;

  h2 {
    color: var(--cor-terciaria);
    font-size: 1.2rem;
    margin: 0;
  }

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 8px;
    display: block;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;

    iframe {
      height: 180px;
    }
  }
`;
