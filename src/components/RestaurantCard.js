import {CDN_URL , STAR_LOGO} from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resData?.info;
    const {slaString} = resData?.info?.sla;
    // console.log(resData);
  return (
    <div data-testid="resCard" className=" m-4 p-4 w-[250px] h-[430px] break-words bg-slate-100 rounded-md hover:bg-slate-300 ">
      <img
        className="w-[240px] h-[180px] rounded-lg" 
        src={CDN_URL
           +
          cloudinaryImageId
        }
        alt=""
      />
      <h2 className="font-bold py-1 text-xl">{name}</h2>
      <h3 className="text-lg font-semibold">{locality}</h3>  
      <h5 className="py-2 text-sm leading-4">{cuisines.join(",")}</h5>
      <div className="ratings_tab flex gap-1 py-1 font-medium">
      <img className="star_logo w-8 rounded-full " src={STAR_LOGO} alt="" ></img>
      <h3>{avgRating + " . " + slaString}</h3>
      </div>
      <h3>{costForTwo}</h3>
      </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute text-white mx-3 rounded-sm bg-gray-700 w-14 text-center">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
