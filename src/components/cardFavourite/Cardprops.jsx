import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Imgbrown from "../../assets/imgbrown.svg";
import Imgbrown2 from "../../assets/imgbrown2.svg";
import Imgblue from "../../assets/imgblue.svg";
import Imgreen from "../../assets/imggreenchairs.svg";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cardprops = (props) => {
  let allBgs = [Imgblue, Imgbrown, Imgbrown2, Imgreen];

  if (props.id == "1") {
    allBgs = [Imgblue, Imgbrown, Imgbrown2, Imgreen];
  } else if (props.id == "2") {
    allBgs = [Imgbrown, Imgbrown2, Imgreen, Imgblue];
  } else if (props.id == "3") {
    allBgs = [Imgbrown2, Imgreen, Imgblue, Imgbrown];
  } else if (props.id == "4") {
    allBgs = [Imgreen, Imgblue, Imgbrown, Imgbrown2];
  } else if (props.id == "popular") {
    allBgs = [Imgbrown, Imgbrown2, Imgblue, Imgreen];
  } else if (props.id == "best") {
    allBgs = [Imgbrown, Imgblue, Imgreen, Imgbrown2];
  }

  const [curSlide, setSlide] = React.useState(0);
  return (
    <>
      <div className=" min-w-max lg:min-w-fit" style={{marginRight: "1rem"}}>
        <Link to= "/">
        <div className="hovshade card relative bg-base-100 h-[340px] lg:max-h-min border-2 border-gray-200">
          <div
            style={{ backgroundImage: "url(" + allBgs[curSlide] + ")" }}
            className="picPlace relative h-[205px] bg-red-50 lg:w-full w-[250px] "
          >
            <div className="heartFavourite w-full flex justify-end p-3">
            
             <HiHeart size={30} color="white" onClick={e => {e.target.style.color == 'white' ? e.target.style.color = '#f43f5a' : e.target.style.color = 'white'}} className="p-1 rounded-full bg-[#00000020] active:scale-90 duration-100 cursor-pointer"/>
            
            </div>

            <div className="arrows flex justify-between w-full px-4 absolute ">
              <div
                style={
                  curSlide > 0
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className="arrow w-5 h-5 bg-white rounded-full"
                onClick={() => {
                  setSlide((cur) => cur - 1);
                }}
              >
                {" "}
                &larr;
              </div>

              <div
                style={
                  curSlide < allBgs.length - 1
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className="arrow w-5 h-5 bg-white rounded-full"
                onClick={() => {
                  setSlide((cur) => cur + 1);
                }}
              >
                &rarr;
              </div>
            </div>
          
          </div>
          <div className="card-body px-4 pt-8 lg:pt-2">
            <h2 className="card-title text-[20px] text-[#2B2B2B] font-medium">
              {props.name}
            </h2>
            <p className="pb-2">{props.location}</p>
            <Stack spacing={0}>
              <Rating
                name="size-small"
                defaultValue={2}
                size="small"
                sx={{ color: "#BC172F" }}
              />
            </Stack>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Cardprops;
