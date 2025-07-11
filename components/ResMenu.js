import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MENU_URL } from "../Backend/utils/constants";


const ResMenu = () => {
  const { id } = useParams(); // get dynamic restaurantId from URL
  const [menu, setMenu] = useState([]);
  const [restName, setRestName] = useState("");
  
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch( MENU_URL+id);
     
    const res = await data.json();

    // set restaurant name
    const restInfo = res?.data?.cards?.find(
      (c) => c?.card?.card?.info
    )?.card?.card?.info;
    setRestName(restInfo?.name);

    // get menu items
    const regularCards =
      res?.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    let items = [];

    for (const section of regularCards) {
      const itemCards = section?.card?.card?.itemCards;
      if (itemCards) {
        for (const item of itemCards) {
          items.push(item.card.info);
        }
      }
    }

    setMenu(items);
    console.log(items);
  };

  return (
    <div>
      <h2>{restName || "Restaurant"} Menu</h2>

      {menu.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              {item.name} — ₹{(item.price || item.defaultPrice) / 100}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResMenu;
