import type { FC } from "react";
import Logotype from "../../components/logotype/Logotype";
import SearchInput from "../../components/search/SearchInput";
import Button from "../../components/button/Button";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores/app.store";
import UserBar from "../../components/user-bar/UserBar";

const Header: FC = () => {
  const auth = useAppStore((state) => state.app);
  return (
    <header className="header container">
      <Logotype />
      <SearchInput />
      {!auth.isAuth ? <HeaderWrapperAuth /> : <UserBar />}
    </header>
  );
};

export default Header;

const HeaderWrapperAuth: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <Button view="white" onClick={() => navigate("/login")}>
        Sign In
      </Button>
      <Button view="black" onClick={() => navigate("/register")}>
        Join Us
      </Button>
    </div>
  );
};
