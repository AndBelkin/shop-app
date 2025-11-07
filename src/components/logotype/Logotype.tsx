import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Logotype.css";

const Logotype: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="logotype" onClick={() => navigate("/")} tabIndex={0}>
      <img src={Logo} alt="Coffie Shop" className="logotype_icon" />
      <p className="logotype__name">Coffie Shop</p>
    </div>
  );
};

export default Logotype;
