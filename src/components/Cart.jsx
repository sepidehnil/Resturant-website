import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import "../assets/styles/cart.css";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items;
  const cartCtx = useContext(UserProgressContext);

  const cartTotal = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleClose() {
    cartCtx.hideCart();
  }

  return (
    <Modal className="cart" open={cartCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}-{item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleClose}>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
