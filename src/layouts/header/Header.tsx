import type { FC } from "react";
import Logotype from "../../components/logotype/Logotype";
import SearchInput from "../../components/search/SearchInput";
import Button from "../../components/button/Button";
import "./Header.css";

const Header: FC = () => {
  return (
    <header className="header">
      <Logotype />
      <SearchInput />
      <div className="header-wrapper">
        <Button view="white" onClick={() => {}}>
          Login
        </Button>
        <Button view="black" onClick={() => {}}>
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
