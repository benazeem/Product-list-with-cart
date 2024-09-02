import Menuitem from "./Menuitem";
import data from "../data/data.json";
import styles from "./style.module.css";

function Menu() {
  return (
    <>
      <h2>Desserts</h2>
      <div className={styles.menucontainer}>
        {" "}
        {data.map((item) => (
          <Menuitem key={item.id} item={item} />
        ))}{" "}
      </div>
    </>
  );
}

export default Menu;
