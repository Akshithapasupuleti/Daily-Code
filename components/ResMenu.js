import React from "react";
import useResMenu from "../Backend/useResMenu"; // adjust path

const ResMenu = () => {
  const { restName, menu } = useResMenu();

  return (
    <div>
      <h2>{restName} Menu</h2>

      {menu.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        <ul>
          {menu.map((item, index) => (
       <li key={`${item.id}-${index}`}>
       {item.name} — ₹{(item.price || item.defaultPrice) / 100}
        </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResMenu;
