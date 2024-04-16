import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Rootlayout = () => {
  return (
    <div>
      <h1>roshni</h1>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
      
    </div>
  );
};

export default Rootlayout;