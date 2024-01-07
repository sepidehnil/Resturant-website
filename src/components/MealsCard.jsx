import "../assets/styles/mealsCard.css";

export default function MealsCard({ meal }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h2 className="meal-item-name">{meal.name}</h2>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions ">
          <button>Add to cart</button>
        </p>
      </article>
    </div>
  );
}
