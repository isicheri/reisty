import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Hero = () => {
  return (
    <>
      <div className="hero pt-[60px] h-[100vh] w-[100%] lg:h-[93vh] text-center lg:flex lg:pt-28 justify-center">
        <div className="text-[30px] leading-[40px] px-7 items-center font-bold text-white lg:text-[45px] lg:leading-[55px] lg:w-[745px]">
          <div className="h2 lg:pb-[20px]">
            <h2>Discover the perfect table for any occasion with ease.</h2>
          </div>

          <div className=" text-[14px] lg:w-[830px] lg:text-[17px] lg:flex lg:items-center lg:text-center lg:font-medium lg:leading-[22px] lg:pr-16">
            <p className=" leading-[22px] font-medium text-center pt-[15px] lg:w-[839px]">
              Browse through a wide selection of restaurants and effortlessly
              find the perfect table for any occasion, whether it's a romantic
              dinner for two, a birthday celebration with friends, or a business
              meeting with colleagues.
            </p>
          </div>
        </div>

        <div className=" block lg:hidden w-[85%] mt-4 mb-6 mx-[29px] px-4 py-4 h-[51vh] bg-white border">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Date" />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker label="Time" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
