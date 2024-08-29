

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
}}

function Menuitem({item}:itemPropType) {
  const { thumbnail,mobile,tablet,desktop,name,category,price} = item;
 
  return <div>
    <img alt={name} src={mobile}/>
    <p>{category}</p>
    <h6>{name}</h6>
    <p>{price}</p>
  </div>;
}

export default Menuitem;
