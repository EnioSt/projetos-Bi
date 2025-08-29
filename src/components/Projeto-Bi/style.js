import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  div {
    display: flex;
    align-items: center;
    gap: 50px;
    color: var(--cor-terciaria);
  }
`;

export const DivIframe = styled.div`
  display: flex;
  height: calc(100vh - 115px);
  justify-content: center;
  align-items: center;
`;
