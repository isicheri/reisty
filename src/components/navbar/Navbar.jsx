import React from "react";
import Logo from "../../assets/reistynewlogo.svg";
import Flag from "../../assets/ngflag.png";
import Arrow from "../../assets/dropdownarrow.svg";
// import Searchicon from "../../assets/searchicon.svg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import "../navbar/Navbar.css";

const Sidebar = () => {
  return (
    <>
      <div className="flex justify-between px-[1.6rem] navbar h-[70px] lg:border-2 lg:border-b-gray-200 items-center lg:gap-6 w-full lg:pl-[4rem] lg:h-[90px] z-10 bg-white fixed lg:py-4">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className="navs hidden lg:flex">
          <div className="country flex items-center gap-3 mr-10">
            <div className="flag">
              <img src={Flag} alt="" />
            </div>
            <div className="country lg:flex lg:items-center">
              <h1>Nigeria</h1>
            </div>
            <div className="arrow pt-[7px]">
              <img src={Arrow} alt="" />
            </div>
          </div>

          <div class="search-box">
            <BiSearch size="20" color="light-gray"/>
            <input
              type="text"
              placeholder="Search Restaurants, cuisines or experience"
            />

            <div class="dropBox">
              <div class="title">
                <Link to = "/restaurantsinLocation">All Restaurants in Lagos</Link>
              </div>
              <div class="top">Top Searches</div>
              <div class="allSearches">
                <div class="search">Bar</div>
                <div class="search">BBQ</div>
                <div class="search">Chicken</div>
                <div class="search">Coctails</div>
                <div class="search">Burgers</div>
                <div class="search">Dessert</div>
                <div class="search">Pizza</div>
                <div class="search">Patio</div>
                <div class="search">Salad</div>
                <div class="search">Swallow</div>
                <div class="search">Wine</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <h1 className="text-[#BC172F] font-medium mr-4">For restaurant</h1>
        </div>

        <div className="btns hidden lg:flex gap-4">
          <div className="login">
            <NavLink to="/login">
              <button className="py-3 px-8 bg-white ring-1 ring-gray-300 rounded-lg font-semibold text-gray-900">
                Log In
              </button>
            </NavLink>
          </div>

          <div className="signup">
            <NavLink to="/signup">
              <button className="py-3 px-7 bg-[#BC172F] rounded-lg text-white font-medium">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <div>
            <BiSearch className="text-[#BC172F] text-[36px] pr-[7px]" />
          </div>

          <div>
            <BiMenu className="text-[#BC172F] text-[45px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
