import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";

function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
