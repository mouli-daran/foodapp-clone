import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpened = withOpenLabel(RestaurantCard);

  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional Chaining
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box flex p-2 my-2 justify-around bg-lime-100">
        <div className="searchArea">
          <input
            className="searchBox border-solid border-black p-2 m-2 rounded-lg"
            type="text"
            data-testid="searchInput  "
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="searchBtn px-4 py-2 bg-orange-300 rounded-lg"
            onClick={() => {
              const filteredReslist = filteredRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListofRestaurants(filteredReslist);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            {restaurant.info.isOpen ? (
              <RestaurantCardOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
