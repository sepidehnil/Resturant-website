import { useEffect, useState } from "react";
import MealsCard from "./MealsCard";
import axios from "axios";
import "../index.css";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  // useEffect(() => {
  //   // async function fetchMeals() {
  //   //   const response = await fetch("http://localhost:3000/meals");
  //   //   if (!response.ok) {"http://localhost:3000/meals"
  //   //   }
  //   //   const meals = await response.json();
  //   //   console.log(meals);
  //   //   setLoadedMeals(meals);
  //   // }

  //   axios
  //     .get("http://localhost:3000/meals")
  //     .then((res) => setLoadedMeals(res.data));
  // }, []);

  ///////////OR
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/mealjs", requestConfig, []);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch" message={error} />;
  }

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
