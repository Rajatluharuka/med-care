import { useState } from "react";
import Header from "./components/Header/Header";
import CartProvider from "./context/CartContext";
import MedicineProvider from "./context/MedicineContext";
import Medicine from "./components/Medicine/Medicine";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <MedicineProvider>
      <CartProvider>
        {cartShown && <Cart onCloseCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Medicine />
        </main>
      </CartProvider>
    </MedicineProvider>
  );
}

export default App;
