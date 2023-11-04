import { Outlet } from "react-router-dom";
import AppHeader from "../../components/appHeader";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default AppLayout;
