import React from "react";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
import Imgbrown from "../../assets/imgbrown.svg";
import Imgbrown2 from "../../assets/imgbrown2.svg";
import Imgblue from "../../assets/imgblue.svg";
import Imgreen from "../../assets/imggreenchairs.svg";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import RatingStar from "../rating/RatingStar";
import ForwardArrow from "../../assets/forwardarrow.svg";
import BackwardArrow from "../../assets/backwardarrow.svg";
// import BackwardArrow from "../../assets/backwardarrow.png"

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
      <div className="min-w-max lg:min-w-full lg:w-full" style={{ marginRight: "1rem" }}>
        <div className="hovshade card relative bg-base-100 h-full pb-8 w-[250px] lg:w-full lg:max-h-min border border-gray-200 bg-white">
          <div
            style={{ backgroundImage: "url(" + allBgs[curSlide] + ")" }}
            className="picPlace relative h-[205px] lg:h-[180px] bg-gray-50 lg:w-full w-full "
          >
            
              <HiHeart
                size={30}
                color="white"
                onClick={(e) => {
                  e.target.style.color == "white"
                    ? (e.target.style.color = "#f43f5a")
                    : (e.target.style.color = "white");
                }}
                className="p-1.5 rounded-full bg-[#00000020] absolute top-3 right-3 active:scale-90 duration-100 cursor-pointer"
              />

            <div className="arrows flex justify-between w-full px-4 absolute ">
              <div
                style={
                  curSlide > 0
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className="arrow w-5 h-5 rounded-full"
                onClick={() => {
                  setSlide((cur) => cur - 1);
                }}
              >
                <img src={BackwardArrow} alt="" className="text-[50px]" />
              </div>

              <div
                style={
                  curSlide < allBgs.length - 1
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className="arrow w-5 h-5 rounded-full"
                onClick={() => {
                  setSlide((cur) => cur + 1);
                }}
              >
                <img src={ForwardArrow} alt="" />
              </div>
            </div>

            <div className=" stepper opacity-0 w-full flex gap-1 justify-center items-center text-yellow-500 absolute bottom-2 left-1/2 -translate-x-1/2 h-2">
              <div
                style={curSlide === 0 ? { opacity: 1 } : { opacity: "45%" }}
                className="w-2 h-2 rounded-full bg-white"
              ></div>
              <div
                style={curSlide === 1 ? { opacity: 1 } : { opacity: "45%" }}
                className="w-2 h-2 rounded-full bg-white"
              ></div>
              <div
                style={curSlide === 2 ? { opacity: 1 } : { opacity: "45%" }}
                className="w-2 h-2 rounded-full bg-white"
              ></div>
              <div
                style={curSlide === 3 ? { opacity: 1 } : { opacity: "45%" }}
                className="w-2 h-2 rounded-full bg-white"
              ></div>
            </div>
          </div>
          <Link to="/restaurantProfile">
          <div className="card-body px-4 pt-2">
            <h2 className="card-title text-[#2B2B2B] font-semibold text-md">
              {props.name}
            </h2>
            <p className="pb-2 text-sm font-light">{props.location}</p>
            <RatingStar />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cardprops;
