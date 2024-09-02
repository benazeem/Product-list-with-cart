import { useContext } from "react";
import styles from "./style.module.css";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import { itemType } from "../Types";
import carbonImg from "../assets/icon-carbon-neutral.svg";
import emptyCartImg from "../assets/illustration-empty-cart.svg";
import ItemList from "./ItemList";
import { setShowProps } from "../Types";

const Cart: React.FC<setShowProps> = ({ setShow }) => {
  const items = useContext(CartContext);

  const totalQuantity = items.reduce((total: number, item: itemType) => {
    return total + item.quantity;
  }, 0);

  const handleOrdered = () => {
    setShow(true);
  };

  return (
    <div className={styles.cartcontainer}>
      <h2>Your Cart ({totalQuantity})</h2>{" "}
      {items.length > 0 ? (
        <>
          <ItemList type={"cart"} />

          <div className={styles.carboninfo}>
            <p>
              <span>
                <img src={carbonImg} alt="0% Carbon Image" />
              </span>
              This ia a <strong>carbon-neutral</strong>delivery
            </p>
          </div>
          <Button onClick={handleOrdered} type={"confirmBtn"}>
            Confirm Order
          </Button>
        </>
      ) : (
        <div className={styles.emptycart}>
          <img src={emptyCartImg} alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
