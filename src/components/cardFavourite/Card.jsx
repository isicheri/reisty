import React from "react";
import Cardprops from "./Cardprops";
import Imgbrown from "../../assets/imgbrown.svg";
import Imgbrown2 from "../../assets/imgbrown2.svg";
import Imgblue from "../../assets/imgblue.svg";
import Imgreen from "../../assets/imggreenchairs.svg";
import Arrow from "../../assets/seemorearrow.svg";
import { NavLink , Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="px-5 md:px-14 lg:px-16 w-full mt-14 " style={{backgroundColor: ""}}>
      <div className="lg:pb-6 flex items-center justify-between w-full lg:pr-6">
        <div className="lg:flex-1">
          <h1 className="text-md font-semibold">
            Featured Restaurants
          </h1>
          <p className="pb-4 text-[14px] md:mt-1 font-normal text-[#2B2B2B] text-xs">
            Discover the best restaurants in your local area
          </p>
        </div>

        <Link to = "/"> 
        <div className="mb-3 flex gap-2 items-center">
          <h1 className="text-redd font-medium text-xs md:text-sm">See more</h1>
          <img src={Arrow} alt="" srcset="" width={15} className="" />
        </div>
        </Link>
      </div>

      <div className=" flex flex-col">
        <div className="flex flex-row overflow-x-scroll min-h-max lg:grid gap-4 lg:grid-cols-4 pb-4 mb-10">
        <Cardprops
          image={Imgbrown}
          id="1"          
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2"
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3"
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>
        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden lg:h-max pb-4 mb-4 gap-1">
        <Cardprops
          id="1" 
          image={Imgbrown}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="2" 
          image={Imgblue}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="3" 
          image={Imgreen}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        <Cardprops
          id="4" 
          image={Imgbrown2}
          name="Terra Kulture"
          location="Lagos, Nigeria"
        />
        </div>
      </div>
    </div>
  );
};

export default Card;
