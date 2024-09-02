import Menu from "./Menu";
import Cart from "./Cart";
import styles from "./style.module.css";
import { setShowProps } from "../Types";

const Container: React.FC<setShowProps> = ({ setShow }) => {
  return (
    <div className={styles.containerbody}>
      <div className={styles.menuinContain}>
        {" "}
        <Menu />
      </div>
      <div className={styles.cartinContain}>
        <Cart setShow={setShow} />
      </div>
    </div>
  );
};

export default Container;
