import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import axios from "axios";

export default function Checkout() {
  const ctx = useContext(CartContext);
  const TotalAmount = ctx.items.reduce((CartTotal, item) => {
    return CartTotal + item.quantity * item.price;
  }, 0);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    console.log(fd); //{}
    // console.log(fd.get("full-name")); //get the name that we write in input cause the name={id} is the in input
    const customerData = Object.fromEntries(fd.entries()); //{full-Name : sepideh}
    console.log(customerData);
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: ctx.items,
          customer: customerData,
        },
      }),
    });
    //     axios.post("http://localhost:3000/orders", {
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         order: {
    //           items: ctx.items,
    //           customer: customerData,
    //         },
    //       }),
    //     });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(TotalAmount)}</p>
        <Input label="Full Name" type="text" id="name" />
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
