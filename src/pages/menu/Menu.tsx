import type { FC } from "react";
import PromoList from "../../layouts/promo/PromoList";
import MenuList from "../../layouts/menu-list/MenuList";
import "./Menu.css";

const Menu: FC = () => {
  return (
    <main className="menu">
      <PromoList />
      <MenuList />
    </main>
  );
};

export default Menu;
