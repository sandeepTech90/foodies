import { Button } from "antd";
import { SearchIcon } from "lucide-react";
import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="app-header">
      <h1 onClick={() => navigate("home")} className="app-header__logo">
        Superfood
      </h1>

      <div className="app-header__menu">
        <h3>Home</h3>
        <h3>Recipes</h3>
        <h3>About Us</h3>
        <h3>Contact</h3>
        <Button
          className="app-header__icon-wrapper"
          shape="round"
          icon={<SearchIcon size={12} strokeWidth={4} color="#fff" />}
        ></Button>
      </div>
    </div>
  );
};

export default AppHeader;
