import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cardFavourite/Card";
import DiscoverCards from "../../components/dicoverfinestrestaurant/DiscoverCards";
import Footer from "../../components/footer/Footer";
import BeforeFooter from "../../components/beforefooter/BeforeFooter";
import {toast} from "react-toastify"

const Home = () => {
  toast.success("Welcome");
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Card />
      <DiscoverCards/>
      <BeforeFooter />
      <Footer/>
    </div>
  );
};

export default Home;
