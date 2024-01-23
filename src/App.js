import React from 'react';

import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

import am from "./pages/am";
import ff from "./pages/ff";
import cv from "./pages/cv";
import Home from "./pages/Home";
import cs from "./pages/cs";
import MyButton from "./components/MyButton";



import './App.css';



const App = () => (
  return (
   <div>

  <Router>
    <MyButton to="" />
    <MyButton to="cs"/>
    <MyButton to="am" />
    <MyButton to="ff" />
    <MyButton to="cv" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cs"
                element={<cs />} />
            <Route path="/am"
                element={<am />} />
            <Route path="/ff"
                element={<ff />} />
            <Route path="/cv"
                element={<cv />} />
        </Routes>
    </Router>
</div>
  )
);

export default App;