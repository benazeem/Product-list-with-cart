import Menuitem from "./Menuitem";
import data from '../data/data.json'

function Menu() {
  return <>
  {data.map((item)=> {
    <Menuitem item={item}/>
  })}
  </>;
}

export default Menu;
