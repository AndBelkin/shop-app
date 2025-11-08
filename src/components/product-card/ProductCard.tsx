import type { FC } from "react";
import styles from "./ProductCard.module.css";
import type { ProductType } from "../../types/globals";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.productCard} onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.img} alt={product.name} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.desc}>{product.desc}</p>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
};

export default ProductCard;
