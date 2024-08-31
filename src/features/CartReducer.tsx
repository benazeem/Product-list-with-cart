export type itemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

function CartReducer(items: itemType[], action) {
  switch (action.type) {
    case "addItem": {
      return [
        ...items,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          image: action.payload.image.thumbnail,
        },
      ];
    }
    case "removeItem": {
      return items.filter((item: itemType) => {
        if (item.id !== action.payload.id) return item;
        else return;
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

    default:
      return items;
  }
}

export default CartReducer;
