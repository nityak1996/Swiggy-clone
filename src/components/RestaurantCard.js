import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext)

 
  const { cloudinaryImageId, avgRating, name, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:bg-slate-100 ">
      <img
        className="rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-card-content ">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{sla?.slaString}</h4>
        <h1>user : {loggedInUser}</h1>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
