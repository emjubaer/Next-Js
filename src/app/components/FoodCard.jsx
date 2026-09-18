import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, dish_name, image_link } = food;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image src={image_link} alt={dish_name} width={500} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <Link href = {`/foods/${id}`}>
              <div className="badge badge-outline">View Details</div>
            </Link>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
