import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import LocationIcon from "../../assets/locationicon.svg";
import arrowDown from "../../assets/arrowDown.svg";
import SearchBar from "../../assets/searchbar.svg"
// import { bgcolor } from "@mui/system";
// import { red } from "@mui/material/colors";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

const Hero = () => {
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
      <div className="hero pt-[60px] h-max w-[100%] pb-10 text-center lg:pt-28 lg:pb-28">
        <div className="text-[30px] leading-[40px] px-7 mx-auto text-center font-bold text-white lg:text-[45px] lg:leading-[50px] lg:w-[745px]">
          <div>
            <div className="h2 lg:pb-[16px]">
              <h2 className=" text-[30px] lg:text-[38px]">
                Discover the perfect table for any occasion with ease.
              </h2>
            </div>

            <div className=" text-[14px] lg:w-[830px] lg:flex lg:items-center lg:text-center lg:font-medium lg:leading-[22px] lg:pr-16">
              <p className=" leading-[22px] font-medium text-center pt-[15px] lg:w-[839px] pb-1 lg:text-[16px]">
                Browse through a wide selection of restaurants and effortlessly
                find the perfect table for any occasion, whether it's a romantic
                dinner for two, a birthday celebration with friends, or a
                business meeting with colleagues.
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" bg-white rounded-xl lg:rounded-2xl w-[75vw] mx-auto h-[55vh] lg:h-14  lg:mt-12 lg:justify-center"> */}
        <div className=" my-7 lg:p-1 p-5 max-w-max bg-white rounded-xl lg:rounded-2xl w-max md:w-[85vw] mx-auto flex lg:items-center lg:mt-12 justify-center">
          <div className="flex mx-[20px] flex-col items-center gap-4 lg:flex-row ">
            <div className="flex flex-col items-start border border-gray-300 lg:border-white  lg:rounded-none lg:border-r-gray-300 w-full rounded-md p-2 px-4">
              <div className="text-gray-400 text-xs">Search</div>
              <div className="fon lg:border-none font-semibold lg:text-sm min-w-max">
                Cuisines, restaurants
              </div>
            </div>
            <div className="flex gap-3 lg:w-max justify-center items-center border border-gray-300  lg:border-none w-full rounded-md p-4 lg:p-0">
              <img src={LocationIcon} className="lg:w-[100px] p-0" />
              <div className="font-semibold lg:hidden">Location</div>
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ padding: 0 }} components={["DatePicker"]}>
                  <DatePicker label="Date" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ padding: 0 }} components={["TimePicker"]}>
                  <TimePicker label="Time" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div
              onFocus={dropDown}
              onBlur={hideDropDown}
              tabIndex="0"
              className="guests min-w-[120px] w-full relative flex flex-col items-start border lg:border-none border-gray-300 rounded-md py-2 px-4"
            >
              <div className="text-gray-400 text-xs">Guests</div>
              <div className="flex w-full justify-between">
                <div className="chosenGuest font-semibold lg:text-sm min-w-max">
                  1 guest
                </div>
                <img src={arrowDown} className="-mt-3 w-3" />
              </div>

              <div
                ref={guestDrop}
                className="allGuests hidden w-full py-2 absolute bg-white min-w-[150px] top-16 lg:top-14 shadow-md border px-1 border-gray-200 shadow-[#00000040] z-30 left-0"
              >
                {allNumbers.map((num) => (
                  <div className="guestChoice py-3 px-1 text-left min-w-max rounded-md cursor-pointer w-full  hover:bg-gray-200">
                    {num} guest
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 py-3 justify-center items-center border lg:rounded-full bg-red-700 border-gray-300  lg:border-none w-full rounded-md lg:p-0 lg:w-1/5 lg:aspect-square lg:items-center lg:justify-center ">
              <img src={SearchBar} className="w-[30px] h-[30px] lg:p-1" alt="" />
              <div className="font-semibold  text-white lg:hidden">Search</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
