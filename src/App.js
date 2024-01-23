import React from 'react';

import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import cybs from "./pages/cybs";
import antm from "./pages/antm";
import fraf from "./pages/fraf";
import clov from "./pages/clov";
import MyButton from "./components/MyButton";



import './App.css';



function App () {
  return (
   <div>

  <Router>
    <MyButton to="" />
    <MyButton to="cys"/>
    <MyButton to="aml" />
    <MyButton to="frf" />
    <MyButton to="clvi" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cys"
                element={<cybs />} />
            <Route path="/aml"
                element={<antm />} />
            <Route path="/frf"
                element={<fraf />} />
            <Route path="/clvi"
                element={<clov />} />
        </Routes>
    </Router>
</div>
  )
  };

export default App;