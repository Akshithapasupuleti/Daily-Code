import React from "react";
import ReactDOM from "react-dom/client";
import "./hello.css";
import { IMG_CDN_URL } from "./Backend/utils/constants";


import Header from "./components/Header";
import Restraurantcard from "./components/Restraurantcard";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";


import Contact from  "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";



const AppLayout = () => (
  <div className="app">
    <Header />
   
    <Outlet/>
    {/*** depending on con outlet will be filled with About or Contact Or Body */}
  
  </div>
);

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
   
    {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>,
    },
    {
      path:"/about",
    element:<About/>,
    errorElement:<Error/>,
    },
    {
      path:"/contact",
    element:<Contact/>,
    errorElement:<Error/>,
    },
    {
   path:"/restaurant/:id",
    element:<ResMenu/>,
      errorElement:<Error/>,
   
  }

    ]

}

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);
