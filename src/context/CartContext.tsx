import { createContext } from "react";
import { cartAction } from "../Types";

export const CartContext = createContext([]);
export const CartDispatchContext = createContext<
  React.Dispatch<cartAction | null>
>(() => {});
