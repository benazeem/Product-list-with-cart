import confirmIcon from "../assets/images/icon-order-confirmed.svg";
import Button from "./Button";
import styles from "./style.module.css";

function Confirmation() {
  const handleClick = () => {};

  return (
    <div className={styles.confirmScreen}>
      <div className={styles.confirmedOrder}>
        <img src={confirmIcon} alt="Confirm Icon" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <Button onClick={handleClick} type={"confirmBtn"}>
          Start New Order
        </Button>
      </div>
    </div>
  );
}

export default Confirmation;
