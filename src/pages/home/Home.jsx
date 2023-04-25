import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cardFavourite/Card";
import DiscoverCards from "../../components/dicoverfinestrestaurant/DiscoverCards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <DiscoverCards/>
    </div>
  );
};

export default Home;
