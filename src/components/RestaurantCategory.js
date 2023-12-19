import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-slate-300 p-2 rounded-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
