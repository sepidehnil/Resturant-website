import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import "../index.css";

export default function MealsCard({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddTOCart() {
    cartCtx.addItem(meal);
  }
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h2 className="meal-item-name">{meal.name}</h2>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddTOCart}>Add to cart</Button>
        </p>
      </article>
    </div>
  );
}
