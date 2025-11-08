import type { FC } from "react";
import styles from "./ProductCard.module.css";
import type { ProductType } from "../../types/globals";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.img} alt={product.name} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.desc}>{product.desc}</p>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
};

export default ProductCard;
