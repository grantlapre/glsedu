import React from 'react';

import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

import am from "./pages/am";
import ff from "./pages/ff";
import clv from "./pages/clv";
import Home from "./pages/Home";
import cs from "./pages/cs";
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
                element={<cs />} />
            <Route path="/aml"
                element={<am />} />
            <Route path="/frf"
                element={<ff />} />
            <Route path="/clvi"
                element={<clv />} />
        </Routes>
    </Router>
</div>
  )
  };

export default App;