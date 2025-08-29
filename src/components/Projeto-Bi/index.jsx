import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, DivIframe, Inner } from "./style";
import { useNavigate } from "react-router-dom";

const ProjetoBi = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Inner>
          <div>
            <FontAwesomeIcon
              onClick={() => navigate("/")}
              size="2x"
              style={{ cursor: "pointer" }}
              icon={faArrowLeft}
            />
            <h2>{title}</h2>
          </div>
          <DivIframe>
            {/* <iframe
              title="pesquisa_satisfacao"
              width="600"
              height="373.5"
              src="https://app.powerbi.com/view?r=eyJrIjoiNjk5OWE5MWEtNDcxOS00YzNiLTkyY2ItMmY1MDhlZTZjOTUwIiwidCI6IjllM2MzMzRjLWY2MmEtNDA4NC04ZTYyLTMyMDZhNDBlMWY2MyJ9"
              frameborder="0"
              allowFullScreen="true"
            ></iframe> */}
            {children}
          </DivIframe>
        </Inner>
      </Container>
    </>
  );
};

export default ProjetoBi;
