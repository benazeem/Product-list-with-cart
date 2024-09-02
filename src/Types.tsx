export interface setShowProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export type imageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type itemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: imageType;
};

export interface cartAction {
  type: "addItem" | "removeItem" | "incItem" | "decItem" | "reset";
  payload?: {
    id: number;
    name?: string;
    price?: number;
    image?: { thumbnail?: string };
  };
}
