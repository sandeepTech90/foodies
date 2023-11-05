import { Outlet, useNavigate } from "react-router-dom";
import AppHeader from "../../components/appHeader";
import "./AppLayout.scss";
import { useEffect } from "react";

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div className="app-layout">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default AppLayout;
