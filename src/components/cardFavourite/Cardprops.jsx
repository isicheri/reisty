import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Cardprops = (props) => {
  return (
    <>
      <div className=" min-w-max lg:min-w-fit">
        <div className="card bg-base-100 h-[340px] lg:h-[315px] w-[95%] border-2 border-gray-200 hover:shadow-lg  hover:shadow-[#BC172F]">
          <div className="h-[200px]">
            <img src={props.image} alt="" />
          </div>
          <div className="card-body px-4 pt-8 lg:pt-2">
            <h2 className="card-title text-[20px] text-[#2B2B2B] font-medium">
              {props.name}
            </h2>
            <p className="pb-2">{props.location}</p>
            <Stack spacing={0}>
              <Rating name="size-small" defaultValue={2} size="small" sx={{color:'#BC172F'}}/>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardprops;
