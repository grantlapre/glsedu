import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import homep from "./pages/homep";
import cybs from "./pages/cybs";
import antm from "./pages/antm";
import fraf from "./pages/fraf";
import clov from "./pages/clov";
import MyButton from "./components/MyButton";



import './App.css';



function App () {
  return (


  <BrowserRouter>
    <MyButton to="" />
    <MyButton to="cybse"/>
    <MyButton to="antmo" />
    <MyButton to="frafi" />
    <MyButton to="clvir" />
        <Routes>
            <Route path="/" element={<homep />} />
            <Route path="cybse"
                element={<cybs />} />
            <Route path="antmo"
                element={<antm />} />
            <Route path="frafi"
                element={<fraf />} />
            <Route path="clvir"
                element={<clov />} />
        </Routes>
    </BrowserRouter>

  )
  };

export default App;