import React, { useState } from "react";

import LocationIcon from "../../assets/locationicon.svg";
import arrowDown from "../../assets/arrowDown.svg";
import SearchBar from "../../assets/searchbar.svg";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Button,
  createTheme,
  ThemeProvider,
  Select,
  MenuItem,
} from "@mui/material";

import { ArrowDownward, } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Date from "./Date";
import Location from "./Location";
import Search from "./Search";
import Time from "./Time";


const theme = createTheme({
  palette: {
    primary: {
      main: "#BC172F",
    },
  },
});



const Hero = () => {

  const [guest, setGuest] = useState('1 guest')
  const handleChangeGuest = (event) => {
    setGuest(event.target.value);


  };

  const guestDrop = React.useRef();
  let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function dropDown() {
    guestDrop.current.style.display = "block";
  }

  function hideDropDown() {
    guestDrop.current.style.display = "none";
  }

  return (
    <>
      <div
        className="hero w-full pt-28  pb-10 text-center lg:pt-24 lg:pb-28"
        style={{
          // height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="text-[30px] leading-[40px] px-7 mx-auto text-center font-bold text-white lg:text-[45px] lg:leading-[50px] lg:w-[745px]">
          <div>
            <div className="h2 lg:pt-[10px]">
              <h2
                className=" text-[30px] lg:text-[38px]"
                style={{
                  fontFamily: "Gordita, sans-serif",
                  fontSize: "40px",
                  marginTop: "0px",
                }}
              >
                Discover the perfect table for any occasion with ease.
              </h2>
            </div>

            <div className=" text-[14px] lg:w-[830px] lg:flex lg:items-center lg:text-center lg:font-medium lg:leading-[22px] lg:pr-16">
              <p
                className=" leading-[22px] font-medium text-center pt-[15px] lg:w-[839px] pb-1 lg:text-[16px]"
                style={{
                  fontFamily: "Gordita, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Browse through a wide selection of restaurants and effortlessly
                find the perfect table for any occasion, whether it's a romantic
                dinner for two, a birthday celebration with friends, or a
                business meeting with colleagues.
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" bg-white rounded-xl lg:rounded-2xl w-[75vw] mx-auto h-[55vh] lg:h-14  lg:mt-12 lg:justify-center"> */}
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: "#fff",
              margin: "0 auto",
              width: "70%",
              // p: 1,
              px: 3,
              borderRadius: "20px",
              mt: 6,
            }}
          >
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", }}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Search />
              </Grid>
              <Grid item lg={1} md={1} sm={12} xs={12}>
                <Box
                  sx={{
                    borderLeft: { lg: "1px solid #dadada", md: '1px solid #dadada', xs: 'none' },
                    borderRight: { lg: "1px solid #dadada", md: '1px solid #dadada', xs: 'none' }
                  }}
                >
                  <Location />
                </Box>
              </Grid>
              <Grid item lg={2} md={2} sm={12} xs={12}>
                <Box sx={{ borderRight: { lg: "1px solid #dadada", md: '1px solid #dadada', xs: 'none' }, px: 1, width: '100%' }}>

                  <Box align="left">
                    <Typography
                      sx={{
                        fontFamily: "Gordita, sans-serif",
                        fontWeight: 200,
                        fontSize: "12px",
                        color: "#717171",
                      }}
                    >
                      {" "}
                      Date
                    </Typography>
                    <Date />

                  </Box>

                </Box>
              </Grid>
              <Grid item lg={2} md={2} sm={12} xs={12}>
                <Box sx={{ borderRight: "1px solid #dadada", px: 1 }}>
                  <Box align="left">
                    <Typography
                      sx={{
                        fontFamily: "Gordita, sans-serif",
                        fontWeight: 200,
                        fontSize: "12px",
                        color: "#717171",
                      }}
                    >
                      {" "}
                      Time
                    </Typography>
                    <Time />
                  </Box>


                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{ borderRight: "1px solid #dadada", px: 2 }}>

                  <Box align="left" sx={{ width: '100%' }}>
                    <Typography
                      sx={{
                        fontFamily: "Gordita, sans-serif",
                        fontWeight: 200,
                        fontSize: "12px",
                        color: "#717171",
                      }}
                    >
                      Guest size
                    </Typography>


                    <Select value={guest}
                      onChange={handleChangeGuest} variant="standard" fullWidth sx={{
                        border: '0px solid', fontFamily: 'Gordita, sans-serif', fontWeight: 400, fontSize: '14px', '& .MuiOutlinedInput-root': {
                          borderColor: 'transparent',
                        }
                      }} size="small"  >
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="1 guest">1 guest</MenuItem>
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="2 guest"> 2 guest</MenuItem>
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="3 guest">3 guest</MenuItem>
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="4 guest">4 guest</MenuItem>
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="5 guest">5 guest</MenuItem>
                      <MenuItem sx={{ fontFamily: 'Gordita, sans-serif', fontSize: '13px', mb: 1 }} value="6 and above">6 and above</MenuItem>
                    </Select>

                  </Box>
                  {/* <ArrowDropDownIcon sx={{ color: "#333", ml: "auto" }} /> */}

                </Box>
              </Grid>
              <Grid item lg={1} md={1} sm={12} xs={12}>
                <IconButton>
                  <img src={SearchBar} width={30} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Hero;

// <div className=" my-7 py-8 lg:py-0 w-[90vw] lg:w-fit lg:px-6 bg-white rounded-xl lg:rounded-2xl md:w-[85vw] mx-auto flex lg:items-center lg:mt-12 justify-center">
// <div className="flex mx-auto flex-col items-center lg:gap-0 gap-4 lg:flex-row ">
//   <div className="flex text-left flex-col items-start border border-gray-300 lg:border-white  lg:rounded-none lg:border-r-gray-300 w-full rounded-md lg:py- lg:px-8 lg:mx-0 py-3 px-4 mx-14">
//     <div className="text-gray-400 text-xs">Search</div>
//     <div className="lg:border-none text-gray-600 font-semibold lg:text-sm min-w-max">
//       Cuisines, restaurants
//     </div>
//   </div>
//   <div className="flex gap-3 lg:w-max justify-center items-center border border-gray-300  lg:border-none w-full lg:rounded-none rounded-md p-4 lg:p-0">
//     <img src={LocationIcon} className="lg:w-[300px] lg:px-3" />
//     <div className="font-semibold text-gray-600 lg:hidden">
//       Location
//     </div>
//   </div>

//   <div>
//     {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar />
//     </LocalizationProvider> */}
//   </div>

//   <div
//     onFocus={dropDown}
//     onBlur={hideDropDown}
//     tabIndex="0"
//     className="guests min-w-[120px] w-full relative flex flex-col items-start border lg:border-none border-gray-300 lg:rounded-none rounded-md lg:py-0 lg:px-4 lg:mx-0 py-3 px-4 mx-14"
//   >
//     <div className="text-gray-400 text-xs">Time</div>
//     <div className="flex w-full justify-between">
//       <div className="chosenGuest text-gray-600 font-semibold lg:text-sm min-w-max">
//         16:00
//       </div>
//       <img src={arrowDown} className="-mt-3 w-3" />
//     </div>

//     <div
//       ref={guestDrop}
//       className="allGuests hidden w-full py-2 absolute bg-white min-w-[150px] top-16 lg:top-14 shadow-md border px-1 border-gray-200 shadow-[#00000040] z-30 left-0"
//     >
//       {allNumbers.map((num) => (
//         <div className="guestChoice py-3 px-1 text-left min-w-max rounded-md cursor-pointer w-full  hover:bg-gray-200">
//           {num} guest
//         </div>
//       ))}
//     </div>
//   </div>

//   <div
//     onFocus={dropDown}
//     onBlur={hideDropDown}
//     tabIndex="0"
//     className="guests min-w-[120px] w-full relative flex flex-col items-start border lg:border-none border-gray-300 rounded-md lg:py-0 lg:px-4 lg:mx-0 py-3 px-4 mx-14"
//   >
//     <div className="text-gray-400 text-xs">Guests</div>
//     <div className="flex w-full justify-between">
//       <div className="chosenGuest font-semibold text-gray-600 lg:text-sm min-w-max">
//         1 guest
//       </div>
//       <img src={arrowDown} className="-mt-3 w-3" />
//     </div>

//     <div
//       ref={guestDrop}
//       className="allGuests hidden w-full py-2 absolute bg-white min-w-[150px] top-16 lg:top-14 shadow-md border px-1 border-gray-200 shadow-[#00000040] z-30 left-0"
//     >
//       {allNumbers.map((num) => (
//         <div className="guestChoice py-3 px-1 text-left min-w-max rounded-md cursor-pointer w-full  hover:bg-gray-200">
//           {num} guest
//         </div>
//       ))}
//     </div>
//   </div>

// <div className="flex gap-3 py-3 lg:py-0 justify-center items-center border lg:rounded-full bg-red-700 border-gray-300  lg:border-none w-full rounded-md lg:w-2/6 lg:ml-8 lg:aspect-square lg:items-center lg:justify-center ">
//   <img
//     src={SearchBar}
//     className="w-[30px] h-[30px] lg:h-[30px] lg:w-[30px] lg:p-1"
//     alt=""
//   />
//   <div className="font-semibold  text-white lg:hidden">Search</div>
// </div>
// </div>
// </div>
