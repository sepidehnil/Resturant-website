import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

export default function Checkout() {
  const ctx = useContext(CartContext);
  const TotalAmount = ctx.items.reduce((CartTotal, item) => {
    return CartTotal + item.quantity * item.price;
  }, 0);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(TotalAmount)}</p>
        <Input label="Full Name" type="text" id="Full-Name" />
        <Input label="E-mail Address" type="email" id="email-address" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <div className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
