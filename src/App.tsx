import { useReducer, useState } from "react";
import { CartContext, CartDispatchContext } from "./context/CartContext";
import CartReducer, { initialCart } from "./features/CartReducer";
import Confirmation from "./components/Confirmation";
import Container from "./components/Container.tsx";
// import "./App.css";

function App() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [items, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <>
      <CartContext.Provider value={items}>
        <CartDispatchContext.Provider value={dispatch}>
          <Container setShow={setIsConfirm} />
          {isConfirm && <Confirmation setShow={setIsConfirm} />}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
