import "../assets/styles/mealsCard.css";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealsCard({ meal }) {
  console.log(currencyFormatter);
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
          <Button>Add to cart</Button>
        </p>
      </article>
    </div>
  );
}
