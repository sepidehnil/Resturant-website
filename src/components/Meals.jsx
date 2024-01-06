import axios from "axios";
import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
      }
      const meals = await response.json();
      console.log(meals);
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  //   axios
  //     .get("http://localhost:3000/meals")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });

  return (
    <ul>
      {loadedMeals.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );
}
