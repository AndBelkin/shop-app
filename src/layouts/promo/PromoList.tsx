import type { FC } from "react";
import PromoImg1 from "../../assets/promo-1.jpg";
import PromoImg2 from "../../assets/promo-2.jpg";
import PromoImg3 from "../../assets/promo-3.jpg";
import styles from "./PromoList.module.css";

const PromoList: FC = () => {
  return (
    <section className={styles.promo}>
      <h2>Special offers</h2>
      <div className={styles.promoList}>
        <div className={styles.promoItem}>
          <h3>Coffee as a gift!</h3>
          <p>Buy three cups of Americano and get another one as a gift!</p>
          <img src={PromoImg1} onDragStart={() => false} onDrop={() => false} />
        </div>
        <div className={styles.promoItem}>
          <h3>Latte syrup to choose from is free.</h3>
          <p>When buying dessert.</p>
          <img src={PromoImg2} onDragStart={() => false} onDrop={() => false} />
        </div>
        <div className={styles.promoItem}>
          <h3>Free door-to-door delivery!</h3>
          <p>If you purchase more than $100, you will receive a gift delivery.</p>
          <img src={PromoImg3} onDragStart={() => false} onDrop={() => false} />
        </div>
      </div>
    </section>
  );
};

export default PromoList;
