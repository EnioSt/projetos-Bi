import { useParams } from "react-router-dom";
import ProjetoBi from "../../components/Projeto-Bi";
import { projetosBi } from "./projeto";

const Projeto = () => {
  const { id } = useParams();
  const projeto = projetosBi[id];

  if (!projeto) {
    return <h2>Projeto não encontrado</h2>;
  }
  return (
    <ProjetoBi title={projeto.title}>
      <iframe
        title={id}
        width="600"
        height="373.5"
        src={projeto.src}
        frameborder="0"
        allowFullScreen
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </ProjetoBi>
  );
};

export default Projeto;
