import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    z-index: 1000;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.3s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: var(--cor-terciaria);
    border-radius: 5px;
    transition-duration: 0.3s;
  }

  #checkbox:checked + .toggle .bars {
    margin-left: 13px;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: rotate(135deg);
    margin-left: 0;
    transform-origin: center;
    transition-duration: 0.3s;
  }

  #checkbox:checked + .toggle #bar1 {
    transform: rotate(45deg);
    transition-duration: 0.3s;
    transform-origin: left center;
  }

  #checkbox:checked + .toggle #bar3 {
    transform: rotate(-45deg);
    transition-duration: 0.3s;
    transform-origin: left center;
  }
`;

export const MenuContent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: var(--cor-secundaria);
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  ul {
    list-style: none;
    padding: 0;
    margin-top: 60px;
  }

  li {
    margin-bottom: 15px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      padding: 8px;
      border-radius: 10px;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-family: var(--fonte-secundaria);
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  #checkbox:checked ~ & {
    transform: translateX(0);
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: var(--fonte-secundaria);
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuHeader = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
    height: 80px;
    border-radius: 24px;
  }
`;
