import React from 'react'
import Logo from "../../assets/logo.png";
import Flag from "../../assets/ngflag.png";
import Arrow from "../../assets/dropdownarrow.svg";
import Searchicon from "../../assets/searchicon.svg";
import { NavLink } from "react-router-dom";

const NavbarDuo = () => {
  return (
    <div className="navbar border-2 justify-between border-b-gray-200 flex items-center lg:gap-6 lg:w-[100%] lg:pl-[4rem] lg:pr[3rem] lg:h-[90px]">
        <div className='flex gap-8'>
        <div className="logo">
          <NavLink to="/">
          <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className="navs lg:flex">
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

          <div className="search px-5 py-3 mr-20 gap-2 rounded-3xl flex ring-1 ring-gray-300 lg:hidden">
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
        <div>
          <h1 className="text-[#BC172F] font-medium mr-4">For resturant</h1>
        </div>

        <div className="btns flex gap-4">
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
        </div>
      </div>
  )
}

export default NavbarDuo