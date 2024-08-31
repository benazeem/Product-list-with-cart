import Menuitem from "./Menuitem";
import data from "../data/data.json";

function Menu() {
  return (
    <>
      {data.map((item) => (
        <Menuitem key={item.id} item={item} />
      ))}
    </>
  );
}

export default Menu;
