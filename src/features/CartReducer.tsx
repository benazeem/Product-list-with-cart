import { cartAction, initialCart, itemType } from "../Types";

function CartReducer(
  items: itemType[],
  action: cartAction
): itemType[] {
  switch (action.type) {
    case "addItem": {
      return [
        ...items,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          image: {
            thumbnail: action.payload.image.thumbnail,
            mobile: action.payload.image.mobile,
            tablet: action.payload.image.tablet,
            desktop: action.payload.image.desktop
          }
        },
      ];
    }
    case "removeItem": {
      return items.filter((item: itemType) => {
        if (item.id !== action.payload.id) return item;
      });
    }

    case "incItem": {
      return items.map((item: itemType) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        else return item;
      });
    }
    case "decItem": {
      return items.map((item: itemType) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        else return item;
      });
    }

    case "reset": {
      return initialCart;
    }

    default:
      return items;
  }
}

export default CartReducer;
