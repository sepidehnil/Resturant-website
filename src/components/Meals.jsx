import { useEffect, useState } from "react";
import MealsCard from "./MealsCard";
import axios from "axios";
import "../index.css";
export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    // async function fetchMeals() {
    //   const response = await fetch("http://localhost:3000/meals");
    //   if (!response.ok) {
    //   }
    //   const meals = await response.json();
    //   console.log(meals);
    //   setLoadedMeals(meals);
    // }

    axios
      .get("http://localhost:3000/meals")
      .then((res) => setLoadedMeals(res.data));
  }, []);

  return (
    <div id="meals">
      {loadedMeals.map((meal) => {
        return (
          <div>
            <MealsCard key={meal.id} meal={meal} />
          </div>
        );
      })}
    </div>
  );
}
