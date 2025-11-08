import type { FC } from "react";
import Logotype from "../../components/logotype/Logotype";
import SearchInput from "../../components/search/SearchInput";
import Button from "../../components/button/Button";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Logotype />
      <SearchInput />
      <div className="header-wrapper">
        <Button view="white" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button view="black" onClick={() => navigate("/register")}>
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
