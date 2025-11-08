import { useState, type FC } from "react";
import styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../stores/products";
import BasketCount from "../../components/basket-count/BasketCount";

const Product: FC = () => {
  const [countBasket, setCountBasket] = useState<number>(0);
  const navigate = useNavigate();
  const productId = useParams().id;
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    navigate("/");
    return false;
  }
  return (
    <main className={styles.product}>
      <section className={styles.productItem}>
        <img src={product.img} alt={product.name} />
        <div className={styles.productInfo}>
          <nav>
            <p onClick={() => navigate("/")} className={styles.link}>
              Menu
            </p>
            <p>/</p>
            <p>{product.name}</p>
          </nav>
          <div className={styles.wrapper}>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.desc}>{product.desc}</p>
            <p className={styles.price}>{product.price}</p>
            <BasketCount
              count={countBasket}
              price={product.price}
              onChange={(event) => (event === "plus" ? setCountBasket(countBasket + 1) : setCountBasket(countBasket - 1))}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
