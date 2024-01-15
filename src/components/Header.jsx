import logo from "../assets/images/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const Ctx = useContext(CartContext);
  const cartCtx = useContext(UserProgressContext);

  const totalCartItems = Ctx.items.reduce((totalItemsOfCart, item) => {
    return totalItemsOfCart + item.quantity;
  }, 0);

  function handleOpen() {
    cartCtx.showCart();
  }
  return (
    <header className="main-header">
      <div className="header-title">
        <img src={logo} className="header-logo" />
        <h1 className="headerName">ReactFood</h1>
      </div>
      <nav className="cart">
        <Button textOnly onClick={handleOpen}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
