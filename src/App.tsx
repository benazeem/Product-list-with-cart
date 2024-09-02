import { useReducer, useState } from "react";
import { CartContext, CartDispatchContext } from "./context/CartContext";
import CartReducer from "./features/CartReducer";
import Confirmation from "./components/Confirmation";
import Container from "./components/Container.tsx";
import { initialCart, cartAction } from "./Types.tsx";


function App() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [items, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <>
      <CartContext.Provider value={items as never[]}>
        <CartDispatchContext.Provider value={dispatch as React.Dispatch<cartAction | null>}>
          <Container setShow={setIsConfirm} />
          {isConfirm && <Confirmation setShow={setIsConfirm} />}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
