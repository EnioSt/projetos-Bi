import GlobalStyle from "./styles/index.js";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao/index.jsx";
import Projetos from "./pages/Projetos/index.jsx";
import Projeto from "./pages/Projeto/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
          </Route>
          <Route path="/bi/:id" element={<Projeto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
