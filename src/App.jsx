import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  }
  
  from "react-router-dom";
  import Home from "./pages/Home"
  import About from "./pages/About"

import Rootlayout from "./component/layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About />}/>
    </Route>)
  );

const App = () => {
  return <RouterProvider router={router}/>;
  };

export default App