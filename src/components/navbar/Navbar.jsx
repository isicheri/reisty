import React, { useState } from "react";
import {  Box, Button,  List,  ListItem,  MenuItem , Typography, } from '@mui/material'
// import Logo from "../../assets/reistynewlogo.svg";
import Logo from "../../assets/reistynewlogo.svg";
// import Flag from "../../assets/ngflag.svg";
// import Arrow from "../../assets/dropdownarrow.svg";
// import Searchicon from "../../assets/searchicon.svg";
import { NavLink, Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "../navbar/Navbar.css";
import Dropdown from "../../assets/dropdownarrow.svg";
import { countries } from "../../assets/fonts/Data/Countries";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Sidebar = () => {
  const [flag, setFlag] = useState("ng")
  const [countriesValue, setCountriesValue] = useState("Nigeria")
  const [setNav, isSetNav] = useState(false);

  const handleChangeCountry = (event) => {
    setCountriesValue(event.target.value);
    console.log(event.target.value);
    setAnchorEl(null)

  };
  const ToggleNav = () => {
    isSetNav(!setNav);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div className="Navbar flex px-[1.6rem] h-[55px]  lg:border-2 lg:border-b-gray-200 items-center w-full lg:px-[4rem] md:w-full lg:h-fit lg:py-4">
        <div className="flex flex-1" style={{ display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div className="flex gap-10 items-center ">
            <div className="logo flex-1 lg:grid">
              <NavLink to="/">
                <img src={Logo} alt="" width={80} />
              </NavLink>
            </div>

            <div className="navs hidden lg:flex">
              <div className="country flex items-center gap-3 mr-10 " style={{alignItems:'center', width:'30%'}}>
           
           <Box sx={{display:'flex', alignItems:'center', "& > img": { mr: 2, flexShrink: 0 }}} onClick={handleClick}>
           <img
                        loading="lazy"
                        width="30"
                        src={`https://flagcdn.com/w20/${flag}.png`}
                        srcSet={`https://flagcdn.com/w40/${flag}.png 2x`}
                        alt=""
                      />
                      <Typography sx={{fontFamily:'gordita', fontSize:'12px', }}>{countriesValue}</Typography>
                      <ArrowDropDownIcon/>

           </Box>
       {/* {
        countries.map((item)=>(
          <MenuItem value={`${item.code} ${item.label}`} sx={{fontFamily:'Gordita' , mb:1 , fontSize:'13px', "& > img": { mr: 2, flexShrink: 0 },}}>
              <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                        {item.label} ({item.code}) 
          </MenuItem>
        ))
       } */}
             

              {/* <Box
                      component="li"
                      sx={{
                        fontFamily: "Gordita",
                        borderRadius: "10px",
                        fontSize: "13px",
                        "& > img": { mr: 2, flexShrink: 0 },
                      }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box> */}
                {/* <div className="flag">
                  <img src={Flag} alt="" width={30} />
                </div>
                <div className="country lg:flex lg:items-center">
                  <h1>Nigeria</h1>
                </div>
                <div className="arrow pt-[7px]">
                  <img src={Arrow} alt="" />
                </div> */}
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
                    <div className="search">Coctails Bar</div>
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
              <h1 className="text-[#BC172F] font-normal" style={{fontSize:'15px', fontWeight:500}}>For restaurant</h1>
            </div>

            <div className="btns hidden lg:flex gap-3">
              <div className="login">
                <NavLink to="/login">
                  <button className="py-3 px-6 bg-white ring-1 ring-gray-300 rounded-lg font-normal text-gray-900" style={{fontSize:'14px'}}>
                    Log In
                  </button>
                </NavLink>
              </div>

              <div className="signup">
                <NavLink to="/signup">
                  <button className="py-3 px-6 bg-[#BC172F] rounded-lg text-white font-normal" style={{fontSize:'14px'}}>
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
          className=" hey min-h-full fixed w-full bg-white z-[500] lg:hidden py-8 px-[2rem] overscroll-y-none"
          style={{ border: "" }}
        >
          <ul className="grid gap-6 ">
            <li className="text-[#BC172F] font-semibold text-[18px]">
              For Restaurants
            </li>
            <li className="text-[#BC172F] flex items-center gap-2 font-semibold pb-5 border-b-1 text-[18px]">
              Country{" "}
              <span>
                <img src={Dropdown} alt="" />
              </span>
            </li>
            <li className=" font-medium text-[16px]">Privacy and Policy</li>
            <li className=" font-medium text-[16px]">Terms of services</li>
            <li className=" font-medium text-[16px] pb-10 border-b-1">
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

<Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
     {
        countries.map((item)=>(
         
          <MenuItem onClick={()=>handleChangeCountry(event)} value="Sam" sx={{fontFamily:'Gordita' , mb:1 , fontSize:'13px', "& > img": { mr: 2, flexShrink: 0 },}}>
              <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                        {item.label} ({item.code}) 
          </MenuItem>
  
        ))
       } 
      </Popover>
    </>
  );
};

export default Sidebar;
