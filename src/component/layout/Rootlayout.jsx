import React from "react";
import { Outlet } from "react-router-dom";



const Rootlayout = () => {
  return (
    <div>
      <h1>roshni</h1>
      <main>
      <Outlet/>
      </main>
      
    </div>
  );
};

export default Rootlayout;