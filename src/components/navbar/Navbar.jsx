import React from "react";
import Logo from "../../assets/reistynewlogo.svg";
import Flag from "../../assets/ngflag.svg";
import Arrow from "../../assets/dropdownarrow.svg";
// import Searchicon from "../../assets/searchicon.svg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import "../navbar/Navbar.css";

const Sidebar = () => {
  return (
    <>
      <div className="navbar flex px-[1.6rem] h-[55px] lg:border-2 lg:border-b-gray-200 items-center w-full lg:px-[4rem] lg:h-fit lg:py-4">
       <div className="flex flex-1">
       <div className="flex gap-10 items-center ">
          <div className="logo flex-1 lg:grid">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>

          <div className="navs hidden lg:flex">
            <div className="country flex items-center gap-3 mr-10 ">
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

            <div class="search-box mr-36">
              <BiSearch size="20" color="gray" />
              <input
                className="text-[13px]"
                type="text"
                placeholder="Search Restaurants, cuisines or experience"
              />

              <div className="dropBox">
                <div className="title">
                  <Link to="/restaurantsinLocation">
                    All Restaurants in Lagos
                  </Link>
                </div>
                <div className="top">Top Searches</div>
                <div className="allSearches">
                  <div className="search">Bar</div>
                  <div className="search">BBQ</div>
                  <div className="search">Chicken</div>
                  <div className="search">Coctails</div>
                  <div className="search">Burgers</div>
                  <div className="search">Dessert</div>
                  <div className="search">Pizza</div>
                  <div className="search">Patio</div>
                  <div className="search">Salad</div>
                  <div className="search">Swallow</div>
                  <div className="search">Wine</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:block">
            <h1 className="text-[#BC172F] font-medium">For restaurant</h1>
          </div>

          <div className="btns hidden lg:flex gap-3">
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
