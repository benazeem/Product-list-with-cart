import { useContext } from "react";
import confirmIcon from "../assets/icon-order-confirmed.svg";
import { CartDispatchContext } from "../context/CartContext";
import Button from "./Button";
import ItemList from "./ItemList";
import styles from "./style.module.css";
import { setShowProps } from "../Types";

const Confirmation: React.FC<setShowProps> = ({ setShow }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleClick = () => {
    dispatch({ type: "reset" });
    setShow(false);
  };

  return (
    <div className={styles.confirmScreen}>
      <div className={styles.confirmedOrder}>
        <img src={confirmIcon} alt="Confirm Icon" />
        <h3>Order Confirmed</h3>
        <p>We hope you enjoy your food!</p>
        <div className={styles.confirmItems}>
          <ItemList type={"confirm"} />
        </div>
        <Button onClick={handleClick} type={"confirmBtn"}>
          Start New Order
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
