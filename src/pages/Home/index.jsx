import { useNavigate } from "react-router-dom";
import { Container, ContentBox } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentBox>
        <h1>Dashboard360</h1>
        <p>
          Bem-vindo ao portal de dashboards da Bip360. Aqui você encontra todos
          os projetos Power BI organizados por área e objetivo estratégico.
        </p>
        <h2>Transformando dados em decisões</h2>
        <h3>Explore os dashboards que impulsionam nossos resultados</h3>
        <button onClick={() => navigate("/projetos")}>
          Ver todos os projetos
        </button>
      </ContentBox>
    </Container>
  );
};

export default Home;
