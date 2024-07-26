import React, { useState } from "react";
import "./components/Css/App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Registration from "./components/Registration";
import Userprofile from "./components/Userprofile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Errorpage from "./components/Errorpage";
import Contactus from "./components/Contactus";
import UserProfile from "./components/Userprofile";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import New from "./components/New";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/Register' element={<Registration />} />
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/404' element={<Errorpage />}></Route> <Route path='/Contactus' element={<Contactus />}></Route>
              <Route path='/User-profile' element={<UserProfile />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/aboutus' element={<AboutUs />}></Route>
              <Route path='/Movie/:movieId' element={<New />}></Route>
              {/* <Route path='/dashboard' element={}></Route> */}
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
