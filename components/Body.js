// App.js or components/Body.js

import React, { useState,useEffect } from "react";

import Restraurantcard from "./Restraurantcard"; 

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList,setResList]=useState([]);
  const [Filtered,setFiltered]=useState([]);
  const [text,setText]=useState("");


useEffect(()=>{
  fetchData();

},[]);
const fetchData= async ()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);


const restaurants =
    json?.data?.cards?.find(
      (card) => card?.card?.card?.id === "top_brands_for_you"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);

  setResList(restaurants || []); 

  setFiltered(restaurants || []);
};

if(resList.length===0){
 return <Shimmer/>
}

  return (
      <div className="body">
      <div className="top-rated">
      <div className="search">

      <input type="text"  className="search-input" value={text} onChange={(e)=>setText(e.target.value)}></input>

       
      <button className="search-btn" onClick={()=>{
        //filter cards and trigger re- render 

        const FilteredRes=resList.filter((item)=>  item.info.name.toLowerCase().includes(text.toLowerCase()));
        setFiltered(FilteredRes);


      }}>search</button>
     </div>
    
      <div className="filter">
      <button className="filter-btn" onClick={()=>{
      const FilData  = resList.filter((item)=>item.info.avgRating>4.5);

         setFiltered(FilData);
       
       }}>Top Rated </button>
       </div>
       </div>

      
    <div className="restaurant-list">
     {Filtered.map((restaurant) => (
     

  <Restraurantcard
    key={restaurant.info.id}
    resList={restaurant.info}
 
  />
   
))}

  </div>
  
    </div>
  );
};

export default Body;
