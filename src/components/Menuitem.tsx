import React, { useState } from "react";
import styles from "./style.module.css";
import Button from "./Button";

type itemPropType = {
  item: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
    id: number;
  };
};

function Menuitem({ item }: itemPropType) {
  const [inCart, setInCart] = useState(0);
  const { image, name, category, price } = item;
  const { mobile } = image;

  const handledecrese = () => {
    // console.log(e.target);
    if (inCart > 0) {
      setInCart((prev) => prev - 1);
    }
  };

  const handleincrese = () => {
    setInCart((prev) => prev + 1);
  };

  return (
    <div className={styles.menuItem}>
     <div className={styles.menuHead}> <img alt={name} src={mobile} />
      {inCart > 0 ? (
        <div className={styles.quantitydiv}>
          <Button onClick={handledecrese} type={"quantity"}>
            <img src="src/assets/images/icon-decrement-quantity.svg" />
          </Button>
          <span> {inCart} </span>
          <Button
            onClick={handleincrese}
            type={"quantity"}
          >
            <img src="src/assets/images/icon-increment-quantity.svg" />
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => {
            setInCart(1);
          }}
          type={"addCartBtn"}
        >
          <img src="/src/assets/images/icon-add-to-cart.svg" />
          <span>Add to Cart</span>
         </Button>
      )}
      </div>
      <div className={styles.itemBody}>
      <p className={styles.category}>{category}</p>
      <p> <strong>{name} </strong></p>
      <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Menuitem;
