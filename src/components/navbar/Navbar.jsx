import React from "react";
import Logo from "../../assets/reistynewlogo.svg";
import Flag from "../../assets/ngflag.png";
import Arrow from "../../assets/dropdownarrow.svg";
import Searchicon from "../../assets/searchicon.svg";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <div className="flex justify-between px-[1.6rem] navbar h-[55px] lg:border-2 lg:border-b-gray-200 items-center lg:gap-6 w-[100%] lg:pl-[4rem] lg:pr[3rem] lg:h-[90px]">
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

          <div className="search  px-5 py-3 mr-20 gap-2 rounded-3xl flex ring-1 ring-gray-300">
            <img src={Searchicon} alt="" />{" "}
            <span>
              <input
                type="text"
                placeholder="Search restaurants, cuisines or experience"
                className="w-[300px] outline-none text-[16px]"
              />
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <h1 className="text-[#BC172F] font-medium mr-4">For restaurant</h1>
        </div>

        <div className="btns hidden lg:flex gap-4">
          <div className="login">
            <NavLink to="/login">
              <button className="py-4 px-8 bg-white ring-1 ring-gray-300 rounded-xl font-semibold text-gray-900">
                Log In
              </button>
            </NavLink>
          </div>

          <div className="signup">
            <NavLink to="/signup">
              <button className="py-4 px-7 bg-[#BC172F] rounded-xl text-white font-medium">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
        <div>
          <BiSearch className="text-[#BC172F] text-[40px] pr-[7px]"/>
        </div>

        <div>
          <BiMenu className="text-[#BC172F] text-[45px]"/>
        </div>
      </div>
        </div>
    </>
  );
};

export default Sidebar;
