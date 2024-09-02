export interface setShowProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const initialCart: itemType[] = [];

export type ItemListProps = {
  type: "cart" | "confirm";
};

export type btnPropType = {
  type: string;
  onClick: () => void;
  children?: React.ReactNode;
};

export type itemPropType = {
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


export type itemType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
};
name: string;
price: number;
id: number;
quantity: number;
};

export type cartAction = | { type: "addItem"; payload: itemType }
| { type: "removeItem"; payload: itemType }
| { type: "incItem"; payload: itemType }
| { type: "decItem"; payload: itemType }
| { type: "reset" };

export type CartReducerType = (state: itemType[], action: cartAction) => itemType[];