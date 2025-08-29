import { Container, Inner } from "./styles";

const Projetos = () => {
  return (
    <Container>
      <Inner>
        <div>
          <h2>Tempo médio de atendimento</h2>
          <a href="https://app.powerbi.com/view?r=eyJrIjoiZmI4MTQ4MGItOWQ3Yi00MDg3LTg2OGEtYTNmNTUzZTNlN2UyIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9">
            <iframe
              title="TMA"
              width="600"
              height="373.5"
              src="https://app.powerbi.com/view?r=eyJrIjoiZmI4MTQ4MGItOWQ3Yi00MDg3LTg2OGEtYTNmNTUzZTNlN2UyIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </a>
        </div>
        <div>
          <h2>Pesquisa de satisfação</h2>
          <a href="https://app.powerbi.com/view?r=eyJrIjoiMmFkNWQ3MmQtZmQ2Ni00ZjY5LThmZGMtN2JlOGZiYzM0NGJhIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9">
            <iframe
              title="pesquisa_satisfacao"
              width="600"
              height="373.5"
              src="https://app.powerbi.com/view?r=eyJrIjoiMmFkNWQ3MmQtZmQ2Ni00ZjY5LThmZGMtN2JlOGZiYzM0NGJhIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </a>
        </div>
      </Inner>
    </Container>
  );
};

export default Projetos;
