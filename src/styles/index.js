import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  :root {
    --cor-primaria: #1377BF;
    --cor-secundaria: #3C2494;
    --cor-terciaria: #FF5C00;
    --cor-preta: #000000;
    --cor-cinza: #414042;
    --font-primaria: 'Orbitron', sans-serif;
    --font-secundaria: 'Montserrat', sans-serif;
    --font-terciaria: 'Playfair Display', serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primaria);
    font-size: 16px;
    background: linear-gradient(135deg, var(--cor-primaria), var(--cor-secundaria));
    color: var(--cor-cinza);
    min-height: 100vh;
  }
`;

export default GlobalStyle;
