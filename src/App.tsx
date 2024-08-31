import { useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { CartContext, CartDispatchContext } from "./context/CartContext";
import CartReducer, { itemType } from "./features/CartReducer";

function App() {
  const initialCart: itemType[] = [];

  const [items, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <>
      <CartContext.Provider value={items}>
        <CartDispatchContext.Provider value={dispatch}>
          <Menu />
          <Cart />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
