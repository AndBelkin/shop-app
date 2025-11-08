import type { FC } from "react";
import styles from "./BasketCount.module.css";
import Button from "../button/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

interface BasketCountProps {
  count: number;
  price: number;
  onChange: (event: "plus" | "minus") => void;
}

const BasketCount: FC<BasketCountProps> = ({ count, price, onChange }: BasketCountProps) => {
  if (count === 0) {
    return (
      <Button view="accent" onClick={() => onChange("plus")}>
        Into a basket
      </Button>
    );
  } else
    return (
      <div className={styles.basketCount}>
        <Button onClick={() => onChange("minus")}>
          <FaMinus />
        </Button>
        <p>{`${count} pc. / $${price * count}`}</p>
        <Button onClick={() => onChange("plus")}>
          <FaPlus />
        </Button>
      </div>
    );
};

export default BasketCount;
