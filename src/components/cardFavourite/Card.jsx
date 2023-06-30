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
    <div className="px-5 lg:px-16  mt-16 " style={{backgroundColor: ""}}>
      <div className="lg:pb-6 lg:flex lg:items-center lg:pr-6">
        <div className="lg:flex-1">
          <h1 className="text-[20px] lg:text-[24px] font-medium">
            Featured Restaurants
          </h1>
          <p className="pb-4 text-[14px] lg:text-[16px] font-normal text-[#2B2B2B]">
            Discover the best restaurants in your local area
          </p>
        </div>

        <Link to = "/"> 
        <div className="mb-3 flex gap-2 items-center">
          <h1 className="text-[#BC172F] font-medium text-[20px]">See more</h1>
          <img src={Arrow} alt="" srcset="" className=" pt-[6px]" />
        </div>
        </Link>
      </div>

      <div className=" flex flex-col gap-10">
        <div className=" flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] gap-1 lg:h-[70vh]">
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
        <div className="flex flex-row overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden h-[50vh] lg:h-[70vh] gap-1">
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
