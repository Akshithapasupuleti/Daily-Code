
import { IMG_CDN_URL } from "../Backend/utils/constants";
import { Link } from "react-router-dom";

const Restraurantcard = ({ resList }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resList;

  return (
    <div className="card">
    
        <Link to={`/restaurant/${resList.id}`}> <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt={name} /></Link> 

      
      <h4>{name}</h4>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default Restraurantcard;



