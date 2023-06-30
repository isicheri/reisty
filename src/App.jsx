import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./pages/home/Home";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
// import SeeMore from "./components/restaurantsinLocation/RestaurantsinLocation";
import RestaurantsinLocation from "./components/restaurantsinLocation/RestaurantsinLocation";
import RestaurantProfile from "./pages/restaurantProfile/RestaurantProfile";
// import Blog from "./pages/aboutUs/Blog";
// import Career from "./pages/aboutUs/Career";
// import OurTeam from "./pages/aboutUs/OurTeam";
// import GetUlego from "./pages/getUlego/GetUlego";
// import { Home } from "./pages/home";
// import FAQ from "./pages/support/FAQ";
// import Support from "./pages/support/Support";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/restaurantsinLocation" element={<RestaurantsinLocation />} />
            <Route path="/restaurantProfile" element={<RestaurantProfile />} />
            {/* <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/aboutUs" element={<OurTeam />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;