import React, { useState } from "react";
import "../navbar/Navbar.css";
import Logo from "../../assets/reistynewlogo.svg";
import Flag from "../../assets/ngflag.svg";
import Dropdown from "../../assets/dropdownarrow.svg";
import Arrow from "../../assets/dropdownarrow.svg";
import Searchicon from "../../assets/searchicon.svg";
import { NavLink } from "react-router-dom";
import { BiMenu, BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const NavbarDuo = () => {
  const [setNav, isSetNav] = useState(false);
  const ToggleNav = () => {
    isSetNav(!setNav);
  };
  return (
    <>
      <div className="navbar px-[2rem] w-full h-[55px] border-2 justify-between border-b-gray-200 flex items-center lg:gap-6 lg:w-[100%] lg:pl-[4rem] lg:pr[rem] lg:h-[90px] overflow-x-hidden">
        <div className="flex gap-8">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="" width={80}/>
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
        </div>

          <div className="search hidden px-5 py-3 mr-20 gap-2 rounded-3xl ring-1 ring-gray-300 lg:hidden">
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

        <div className='flex gap-8 items-center mr-12'>
        <div className='hidden lg:flex'>
          <h1 className="text-[#BC172F] font-medium mr-4">For restaurant</h1>
        </div>

        <div className="btns lg:flex gap-4 hidden">
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

        <div className="flex items-center lg:hidden">
          <div className="hidden">
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
          className=" hey min-h-full fixed w-full bg-white z-[500] lg:hidden py-8 px-[2rem] overscroll-y-none"
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

export default NavbarDuo;
