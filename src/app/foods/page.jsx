import React from "react";
import FoodCard from "../components/FoodCard";

const Food = async () => {
  const result = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );

  const data = await result.json();
  const foods = data.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Food;
