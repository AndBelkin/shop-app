import type { FC } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { products } from "../../stores/products";
import "./MenuList.css";

const MenuList: FC = () => {
  const renderMenuList = () => products.map((item) => <ProductCard product={item} key={item.id} />);
  return (
    <section className="menu">
      <h2>Classic drinks</h2>
      <div className="menu-list">{renderMenuList()}</div>
    </section>
  );
};

export default MenuList;
