import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../context/CartContext";
import Button from "./Button";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";
import styles from "./style.module.css";
import { itemType } from "../Types";
import { itemPropType } from "../Types";

function Menuitem({ item }: itemPropType) {
  const { image, name, category, price, id } = item;
  const { mobile, tablet, desktop } = image;
  const dispatch = useContext(CartDispatchContext);
  const cartItems: itemType[] = useContext(CartContext);
  const itemInCart = cartItems.find((cartItem: itemType) => cartItem.id === id);
  const itemquantity = itemInCart ? itemInCart.quantity : 0;

  const imgStyles =
    itemquantity > 0
      ? {
          border: "2px solid red",
        }
      : { border: "2px solid transparent" };

  const handledecrese = () => {
    // console.log(e.target);
    if (itemquantity === 1) {
      dispatch({ type: "removeItem", payload: item });
    } else {
      dispatch({ type: "decItem", payload: item });
    }
  };

  const handleClick = () => {
    dispatch({ type: "addItem", payload: item });
  };

  const handleincrese = () => {
    dispatch({ type: "incItem", payload: item });
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.menuHead}>
        {" "}
        <picture>
          <source srcSet={mobile} media="(max-width: 450px)" />
          <source srcSet={tablet} media="(max-width: 1024px)" />
          <img src={desktop} alt={name} style={imgStyles} />
        </picture>
        {itemquantity > 0 ? (
          <div className={styles.quantitydiv}>
            <Button onClick={handledecrese} type={"quantity"}>
              <img src={decrease} alt="Decrease Icon" />
            </Button>
            <span> {itemquantity} </span>
            <Button onClick={handleincrese} type={"quantity"}>
              <img src={increase} alt="Increase Icon" />
            </Button>
          </div>
        ) : (
          <Button onClick={handleClick} type={"addCartBtn"}>
            <img src="/src/assets/images/icon-add-to-cart.svg" />
            <span>Add to Cart</span>
          </Button>
        )}
      </div>
      <div className={styles.itemBody}>
        <p className={styles.category}>{category}</p>
        <p>
          <strong>{name} </strong>
        </p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Menuitem;
