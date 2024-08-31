import { useContext } from "react";
import styles from "./style.module.css";
import { CartContext, CartDispatchContext } from "../context/CartContext";
import Button from "./Button";
import { itemType } from "../features/CartReducer";
import carbonImg from "../assets/images/icon-carbon-neutral.svg";
import removeIcon from "../assets/images/icon-remove-item.svg";

function Cart() {
  const items = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const totalAmount = items.reduce((total: number, item: itemType) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = items.reduce((total: number, item: itemType) => {
    return total + item.quantity;
  }, 0);

  const handleOrdered = () => {};

  return (
    <>
      <div className={styles.cartcontainer}>
        <h2>Your Cart ({totalQuantity})</h2>{" "}
        {items.length > 0 ? (
          <>
            {items.map((item: itemType) => {
              return (
                <div key={item.id} className={styles.activecart}>
                  <div className={styles.cartCard}>
                    <div>
                      <p>{item.name}</p>
                      <div className={styles.itemprices}>
                        <p>{item.quantity}X</p>
                        <p>@ ${item.price.toFixed(2)}</p>
                        <p>${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    </div>

                    <Button
                      type={"remove"}
                      onClick={() => {
                        dispatch({ type: "removeItem", payload: item });
                      }}
                    >
                      <img src={removeIcon} />
                    </Button>
                  </div>
                </div>
              );
            })}
            <div className={styles.total}>
              <p>Order Total</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className={styles.carboninfo}>
              <p>
                <span>
                  <img src={carbonImg} />
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
            <img src="src\assets\images\illustration-empty-cart.svg" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
