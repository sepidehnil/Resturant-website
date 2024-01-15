import clasees from "../assets/styles/Header.module.css";
import logo from "../assets/images/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Header() {
  const Ctx = useContext(CartContext);
  const totalCartItems = Ctx.items.reduce((totalItemsOfCart, item) => {
    return totalItemsOfCart + item.quantity;
  }, 0);
  return (
    <header className={clasees["main-header"]}>
      <div className={clasees["header-title"]}>
        <img src={logo} className={clasees["header-logo"]} />
        <h1 className="headerName">ReactFood</h1>
      </div>
      <nav className={clasees["cart"]}>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
