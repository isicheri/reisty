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
      <div className="navbar sticky top-0 bg-white px-5 w-full py-3  border-2 justify-between border-b-gray-200 flex items-center lg:gap-6 lg:w-[100%] lg:px-14 h-[65px] overflow-hidden">
        <div className="flex items-center gap-8">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="" width={80}/>
            </NavLink>
          </div>

          <div className="navs hidden lg:flex items-center">
          <div className="country flex items-center gap-3 mr-10 cursor-pointer hover:bg-gray-50 p-3 rounded-md
          ">
            <div className="flag">
              <img src={Flag} width={25} alt="" />
            </div>
            <div className="country lg:flex lg:items-center items-center gap-2 text-sm">
              <h1>Nigeria</h1>
            <div className="arrow ">
              <img src={Arrow} alt="" />
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className='flex gap-8 items-center mr-12'>
        <div className='hidden lg:flex'>
          <h1 className="text-[#BC172F] text-sm font-medium mr-4">For restaurant</h1>
        </div>

        <div className="btns lg:flex items-center gap-4 hidden">
          <div className="login">
            <NavLink className="py-3 px-6 bg-white ring-1 ring-gray-300 text-sm rounded-md font-semibold text-gray-900" to="/login">
                Log In
            </NavLink>
          </div>

        <div className="signup">
            <NavLink className="py-3 px-6 bg-[#BC172F] rounded-md text-sm text-white font-medium" to="/signup">
                Sign up
            </NavLink>
          </div>
        </div>
        </div>

        <div className="flex items-center lg:hidden">
          <div className="hidden">
            <BiSearch className="text-[#BC172F] text-[35px] pr-[7px]" />
          </div>

          <div>
            {!setNav ? (
              <BiMenu
                className="text-[#BC172F] text-[35px]"
                onClick={ToggleNav}
              />
            ) : (
              <RxCross2
                color="#BC172F" width={20}
                onClick={ToggleNav}
                className="items-center w-[30px] h-[30px]"
              />
            )}
          </div>
        </div>
      </div>

      {!setNav ? (
        ""
      ) : (
       <div className="rxcross fixed w-full bg-white overflow-y-scroll">
         <div
          className=" hey w-full bg- z-[500] lg:hidden py-8 px-[2rem]"
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

// const NavbarDuo = () => {
//   return ""
// }
export default NavbarDuo;
