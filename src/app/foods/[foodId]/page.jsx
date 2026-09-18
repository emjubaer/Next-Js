import React from "react";

const FoodDetails = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const result = await res.json();
  const {dish_name, origin_and_popularity } = result.data;

  return (
    <div>
      <h1>{dish_name}</h1>
      <p>{origin_and_popularity}</p>
    </div>
  );
};

export default FoodDetails;
