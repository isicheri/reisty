import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

const Hero = () => {
  return (
    <>
      <div className="hero pt-[60px] h-[100vh] w-[100%] lg:h-[93vh] text-center lg:pt-28">
        <div className="text-[30px] leading-[40px] px-7 mx-auto text-center font-bold text-white lg:text-[45px] lg:leading-[50px] lg:w-[745px]">
          <div>
          <div className="h2 lg:pb-[16px]">
            <h2 className=" text-[30px] lg:text-[38px]">Discover the perfect table for any occasion with ease.</h2>
          </div>

          <div className=" text-[14px] lg:w-[830px] lg:flex lg:items-center lg:text-center lg:font-medium lg:leading-[22px] lg:pr-16">
            <p className=" leading-[22px] font-medium text-center pt-[15px] lg:w-[839px] pb-1 lg:text-[16px]">
              Browse through a wide selection of restaurants and effortlessly
              find the perfect table for any occasion, whether it's a romantic
              dinner for two, a birthday celebration with friends, or a business
              meeting with colleagues.
            </p>
          </div>
          </div>
        </div>
        <div className="  bg-white rounded-xl lg:rounded-2xl w-[75vw] mx-auto h-[55vh] lg:h-14 lg:mt-12 lg:justify-center">
          <div className=" block lg:hidden mt-4 mb-6 mx-[29px] py-4">
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
      </div>
    </>
  );
};

export default Hero;
