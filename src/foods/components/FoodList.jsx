import React from "react";

import FoodItem from "./FoodItem";

const FoodList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2> No item found, Maybe come later</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="food-list">
          {props.items.map((food) => {
            return (
              <FoodItem
                key={food.id}
                id={food.id}
                image={food.imageUrl}
                name={food.name}
                newPrice={food.newPrice}
                oldPrice={food.oldPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
