import React, { useState } from "react";
import Logo from "../../assets/reistynewlogo.svg";
import Flag from "../../assets/ngflag.svg";
import Arrow from "../../assets/dropdownarrow.svg";
// import Searchicon from "../../assets/searchicon.svg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "../navbar/Navbar.css";
import Dropdown from "../../assets/dropdownarrow.svg";

const Sidebar = () => {
  const [setNav, isSetNav] = useState(false);
  const ToggleNav = () => {
    isSetNav(!setNav);
  };
  return (
    <>
      <div className="navbar flex px-[1.6rem] h-[55px] lg:border-2 lg:border-b-gray-200 items-center w-full lg:px-[4rem] md:w-full lg:h-fit lg:py-4">
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
            {!setNav ? (
              <BiMenu
                className="text-[#BC172F] text-[45px]"
                onClick={ToggleNav}
              />
            ) : (
              <RxCross2
                color="#BC172F"
                onClick={ToggleNav}
                className="items-center w-10 h-10"
              />
            )}
          </div>
        </div>
      </div>
      {!setNav ? (
        ""
      ) : (
       <div className="rxcross">
         <div
          className=" h-full fixed w-full bg-white z-[500] lg:hidden py-8 px-[2rem]"
          style={{ border: "" }}
        >
          <ul className="grid gap-6 ">
            <li className="text-[#BC172F] font-semibold text-[18px]">
              For Restaurants
            </li>
            <li className="text-[#BC172F] flex items-center gap-2 font-semibold pb-5 border-b-2 text-[18px]">
              Country{" "}
              <span>
                <img src={Dropdown} alt="" />
              </span>
            </li>
            <li className=" font-medium text-[16px]">Privacy and Policy</li>
            <li className=" font-medium text-[16px]">Terms of services</li>
            <li className=" font-medium text-[16px] pb-10 border-b-2">
              Cookie Policy
            </li>
          </ul>

          <div className=" flex flex-col justify-center gap-6 pt-16">
          <NavLink to="/login">
            <button className="border-none w-full bg-white py-3 ring-1 ring-gray-300 rounded-lg font-semibold text-gray-900 text-[20px]">
              Log In
            </button>
            </NavLink>
            <NavLink to="/signup">
            <button className="border-none text-[20px] text-white w-full py-3 bg-[#BC172F] ring-1 ring-gray-300 rounded-lg font-semibold">
              Sign Up
            </button>
            </NavLink>
          </div>
        </div>
       </div>
      )}
    </>
  );
};

export default Sidebar;
