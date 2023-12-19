import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resMenu === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage } =
  resMenu?.cards[0]?.card?.card?.info;
    
  const { itemCards } =
      resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


      const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="menus">
      <h1 className="text-center font-bold my-4 text-xl">{name}</h1>
      <h2 className="text-center text-sm">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h2>
      <h2 className="text-center">{areaName}</h2>
      {categories.map((category , index) => (
        //Controlled Component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems = {index == showIndex ? true : false} 
          setShowIndex = {() => {setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
