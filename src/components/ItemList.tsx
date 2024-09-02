import { useContext } from "react";
import Button from "./Button";
import styles from "./style.module.css";
import { CartContext, CartDispatchContext } from "../context/CartContext";
import { itemType } from "../Types";
import removeIcon from "../assets/images/icon-remove-item.svg";
import { ItemListProps } from "../Types";

function ItemList({ type }: ItemListProps) {
  const items = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const totalAmount = items.reduce((total: number, item: itemType) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {items.map((item: itemType) => (
        <div key={item.id} className={styles[`active${type}`]}>
          <div className={styles[`${type}Card`]}>
            {type === "confirm" && (
              <img src={item.image.thumbnail} alt={item.name} />
            )}
            <div className={styles[`${type}infos`]}>
              <p>{item.name}</p>
              <div className={styles[`${type}itemprices`]}>
                <p>{item.quantity}X</p>
                <p>@${item.price.toFixed(2)}</p>
                {type === "cart" && (
                  <p>${(item.quantity * item.price).toFixed(2)}</p>
                )}
              </div>
            </div>

            {type === "confirm" && (
              <p>${(item.quantity * item.price).toFixed(2)}</p>
            )}
            {type === "cart" && (
              <Button
                type="remove"
                onClick={() => dispatch({ type: "removeItem", payload: item })}
              >
                <img src={removeIcon} alt="Remove item" />
              </Button>
            )}
          </div>
        </div>
      ))}
      <div className={styles[`${type}total`]}>
        <p>Order Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
    </>
  );
}

export default ItemList;
