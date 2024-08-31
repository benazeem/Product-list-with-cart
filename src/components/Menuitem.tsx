import { useContext } from "react";
import styles from "./style.module.css";
import Button from "./Button";
import { CartContext, CartDispatchContext } from "../context/CartContext";
import { itemType } from "../features/CartReducer";

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
  const { image, name, category, price, id } = item;
  const { mobile } = image;
  const dispatch = useContext(CartDispatchContext);
  const cartItems = useContext(CartContext);
  const itemInCart = cartItems.find((cartItem: itemType) => cartItem.id === id);
  const itemquantity = itemInCart ? itemInCart.quantity : 0;

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
        <img alt={name} src={mobile} />
        {itemquantity > 0 ? (
          <div className={styles.quantitydiv}>
            <Button onClick={handledecrese} type={"quantity"}>
              <img src="src/assets/images/icon-decrement-quantity.svg" />
            </Button>
            <span> {itemquantity} </span>
            <Button onClick={handleincrese} type={"quantity"}>
              <img src="src/assets/images/icon-increment-quantity.svg" />
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
          {" "}
          <strong>{name} </strong>
        </p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Menuitem;
