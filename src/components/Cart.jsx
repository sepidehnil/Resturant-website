import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import "../index.css";
import CartItem from "./CartItem";

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
  function handleGoToCheckout() {
    cartCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={cartCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => {
              ctx.removeItem(item.id);
            }}
            onIncrease={() => ctx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        {cartItems.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
