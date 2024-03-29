import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import Rootlayout from "./component/layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout.jsx />}>
    <Route index element={<Home.jsx />}/>
    <Route path="/about" element={<About />}/>
    </Route>)
  );

const App = () => {
  return <RouterProvider router={router}/>;
  };

export default App