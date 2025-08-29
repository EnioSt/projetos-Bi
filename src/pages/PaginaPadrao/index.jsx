import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

const PaginaPadrao = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PaginaPadrao;
