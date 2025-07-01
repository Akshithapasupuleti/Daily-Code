
import { IMG_CDN_URL } from "../Backend/utils/constants";

const Restraurantcard = ({ resList }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resList;

  return (
    <div className="card">
    
       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt={name} />

      
      <h4>{name}</h4>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default Restraurantcard;



