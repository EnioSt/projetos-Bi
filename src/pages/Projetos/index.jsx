import { Container, FlexList, Card } from "./styles";

const projetos = [
  {
    titulo: "Tempo médio de atendimento",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZmI4MTQ4MGItOWQ3Yi00MDg3LTg2OGEtYTNmNTUzZTNlN2UyIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9",
  },
  {
    titulo: "Pesquisa de satisfação",
    src: "https://app.powerbi.com/view?r=eyJrIjoiMmFkNWQ3MmQtZmQ2Ni00ZjY5LThmZGMtN2JlOGZiYzM0NGJhIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9",
  },
  {
    titulo: "Unidades em Implantação",
    src: "https://app.powerbi.com/view?r=eyJrIjoiNGRmMDQ1OTAtZTVmYS00ZGYzLTkwOWQtZjczOTc3NGNlZDY3IiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9",
  },
];

const Projetos = () => {
  return (
    <Container>
      <FlexList>
        {projetos.map((projeto, index) => (
          <Card key={index}>
            <h2>{projeto.titulo}</h2>
            <iframe title={projeto.titulo} src={projeto.src} allowFullScreen />
          </Card>
        ))}
      </FlexList>
    </Container>
  );
};

export default Projetos;
