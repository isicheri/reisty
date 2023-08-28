import React from "react";


const OwnersClaim = () => {
  return (
    <div className="w-full mb-4 lg:mb-8 grid grid-cols-1 lg:grid-cols-2 lg:mt-8 gap-2">
      <div className="first px-[26px] pt-[82px] pb-4 lg:grid min-h-max w-full lg:w-[550px] lg:min-h-max text-white lg:py-[45px] lg:pl-[30px]">
        <h2 className=" uppercase text-md font-semibold">Restuarant owners</h2>
        <h1 className=" w-[270px] text-[17px] lg:text-3xl font-bold ">CLAIM YOUR RESTAURANT TODAY!</h1>
        <p className="pb-[20px] w-full text-xs font-normal leading-5 pr-10 lg:pt-0">Claim your restaurant on Reisty to take control of your online presence, manage reservations, menus, and reviews, and showcase your establishment to potential diners while maintaining full control."</p>
        <button className="rounded-full bg-white text-black w-max px-7 h-max py-2.5 font-medium hover:bg-gray-100 mb-10">See full list</button>
      </div>

      <div className="grid lg:min-h-max w-full lg:flex"> 
        <div className="text py-[22px] px-[30px] lg:w-full bg-[#F2F2F2] text-black lg:py-[45px] pl-[18px] pr-[8px]" >
            <h2 className="  uppercase text-md font-semibold">WAITLIST MANAGEMENT</h2>
            <h1 className=" w-[270px] text-[17px] lg:text-3xl font-bold pt-5">WAITLIST MANAGEMENT WITH REISTY</h1>
            <p className="pb-[20px] w-full text-xs font-normal leading-5 pr-10 lg:pt-0 mt-5">Maximize seating efficiency with Reisty's waitlist management tool. Estimate wait times, send SMS notifications, and increase revenue while improving customer satisfaction</p>
            <button className="rounded-full hover:bg-dark text-white bg-redd w-max px-7 h-max py-2.5 font-medium">Create a free account</button>
        </div>
        <div className="second order-[-1] lg:order-1 w-[90vw] h-[20vh] lg:h-full lg:w-full"></div>
      </div>
    </div>
  );
};

export default OwnersClaim;
