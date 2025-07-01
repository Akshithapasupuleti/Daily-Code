import React from "react";
import ReactDOM from "react-dom/client";
import "./hello.css";
import { IMG_CDN_URL } from "./Backend/utils/constants";


import Header from "./components/Header";
import Restraurantcard from "./components/Restraurantcard";
import Body from "./components/Body"


const AppLayout = () => (
  <div className="app">
    <Header />
   
    <Body/>
  
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
