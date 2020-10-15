import React from "react";

import FoodList from "../components/FoodList2";

const DUMMY_FOODS = [
  {
    id: "f1",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Veg Manchurian",
  },

  {
    id: "f2",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl: "https://i.ytimg.com/vi/gLl-KpZCqG0/maxresdefault.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Paneer Manchurian",
  },
  {
    id: "f3",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl:
      "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Paneer Tikka",
  },
  {
    id: "f4",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Veg Manchurian",
  },

  {
    id: "f5",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl: "https://i.ytimg.com/vi/gLl-KpZCqG0/maxresdefault.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Paneer Manchurian",
  },
  {
    id: "f6",
    status: "Available",
    newPrice: {
      half: 85,
      full: 160,
    },
    oldPrice: {
      half: 85,
      full: 170,
    },
    imageUrl:
      "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
    category: {
      veg: true,
      timely: "Snacks",
    },
    name: "Paneer Tikka",
  },
];

const ListOfFoods = () => {
  console.log(DUMMY_FOODS.length);
  return <FoodList items={DUMMY_FOODS} />;
};

export default ListOfFoods;
