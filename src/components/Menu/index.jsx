import { MenuContent, MenuHeader, StyledLink, StyledWrapper } from "./style.js";
import Logo from "../../assets/bip_360_logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <MenuHeader>
      <StyledWrapper>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label>

          <MenuContent>
            <ul>
              <li onClick={() => navigate("/bi/tma")}>
                <StyledLink>TMA</StyledLink>
              </li>
              <li onClick={() => navigate("/bi/avaliacoes")}>
                <StyledLink>Avaliações</StyledLink>
              </li>
            </ul>
          </MenuContent>
        </div>
      </StyledWrapper>
      <img onClick={() => navigate("/")} src={Logo} alt="logo da Bip360" />
    </MenuHeader>
  );
};

export default Menu;
