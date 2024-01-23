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
import CardExample from './CardExample';



import './App.css';



function App () {
  return (
   <div>
<CardExample />
  <Router>
    <MyButton to="" />
    <MyButton to="cybs"/>
    <MyButton to="antm" />
    <MyButton to="fraf" />
    <MyButton to="clvi" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cybs"
                element={<cybs />} />
            <Route path="/antm"
                element={<antm />} />
            <Route path="/fraf"
                element={<fraf />} />
            <Route path="/clvi"
                element={<clov />} />
        </Routes>
    </Router>
</div>
  )
  };

export default App;