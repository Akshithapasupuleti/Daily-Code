import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Backend/utils/constants"; // update path if needed

const useResMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [restName, setRestName] = useState("");

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + id);
      const res = await data.json();

      // Get restaurant name
      const restInfo = res?.data?.cards?.find(
        (c) => c?.card?.card?.info
      )?.card?.card?.info;

      setRestName(restInfo?.name || "Restaurant");

      // Get menu items
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
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  return { restName, menu };
};

export default useResMenu;
