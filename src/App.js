import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import './App.css';
import MainPage from "./components/MainPage";
import ZipCode from "./components/ZipCode";
import Restaurant1 from "./components/Restaurant1";
import Restaurant2 from "./components/Restaurant2";
import Restaurant3 from "./components/Restaurant3";
import LoginButton from "./components/LoginButton";
import AllRestaurants from "./components/AllRestaurants";


function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">MainPage</Link>
        <Link to="/zipcode">ZipCode</Link>
        <Link to="/search">Search</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/zipcode" element={<ZipCode />}/>
        <Route path="/allrestaurants" element={<AllRestaurants />}/>
        <Route path="/restaurant1" element={< Restaurant1/>}/>
        <Route path="/restaurant2" element={< Restaurant2/>}/>
        <Route path="/restaurant3" element={< Restaurant3/>}/>
        <Route path="/loginbutton" element={<LoginButton/>}/>
        {/* test */}
      </Routes>
    </Router>
  );
}

export default App;
