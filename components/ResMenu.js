import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ResMenu = () => {
  const { id } = useParams(); // get dynamic restaurantId from URL
  const [menu, setMenu] = useState([]);
  const [restName, setRestName] = useState("");

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3843&lng=78.4583&restaurantId=${id}`
    );
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
