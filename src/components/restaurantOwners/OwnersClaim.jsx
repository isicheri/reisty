import React from "react";


const OwnersClaim = () => {
  return (
    <div className="w-full mb-8 grid grid-cols-1 lg:grid-cols-2 mt-4 gap-5">
      <div className="first px-[26px] pt-[82px] pb-4 lg:grid min-h-max w-full lg:w-[550px] lg:min-h-max text-white lg:py-[45px] lg:pl-[30px]">
        <h2 className=" leading-[17.26px] uppercase text-[16px] font-bold">Restuarant owners</h2>
        <h1 className=" pb-[15px] leading-[30px] w-[270px] text-[20px] lg:text-[40px] font-bold lg:leading-[50px] lg:w-[300px]">CLAIM YOUR RESTAURANT TODAY!</h1>
        <p className="pb-[20px] text-[14px] w-[310px] lg:w-[510px] lg:text-[17px] font-medium leading-5 lg:pt-0">Claim your restaurant on Reisty to take control of your online presence, manage reservations, menus, and reviews, and showcase your establishment to potential diners while maintaining full control."</p>
        <button className="p-1 rounded-xl bg-white text-black w-[130px] font-medium">See full list</button>
      </div>

      <div className="grid lg:min-h-max w-full lg:flex"> 
        <div className="text py-[22px] px-[30px] lg:w-full bg-[#F2F2F2] text-black lg:py-[45px] pl-[18px] pr-[8px]" >
            <h2 className=" text-[16px] lg:text-[17px] font-bold">WAITLIST MANAGEMENT</h2>
            <h1 className=" text-[20px] lg:text-[40px] font-bold leading-[30px] lg:leading-[43px] py-5  lg:w-[300px]">WAITLIST MANAGEMENT WITH REISTY</h1>
            <p className="text-[14px] w-[300px] lg:w-[325px] lg:text-[17px] pb-4 lg:lg:leading-5 font-medium">Maximize seating efficiency with Reisty's waitlist management tool. Estimate wait times, send SMS notifications, and increase revenue while improving customer satisfaction</p>
            <button className="py-4 px-6 rounded-xl bg-[#BC172F] text-white font-medium">Create a free account</button>
        </div>
        <div className="second order-[-1] lg:order-1 w-[90vw] h-[20vh] lg:h-full lg:w-full"></div>
      </div>
    </div>
  );
};

export default OwnersClaim;
