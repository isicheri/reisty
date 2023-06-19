import React from "react";


const OwnersClaim = () => {
  return (
    <div className="w-[100%] mb-8 grid grid-cols-1 lg:grid-cols-2 mt-16 gap-5">
      <div className="first px-[26px] pt-[82px] lg:grid w-[300px] lg:w-[550px] lg:h-[463px] text-white lg:py-[45px] lg:pl-[30px]">
        <h2 className=" leading-[17.26px] uppercase text-[16px] font-bold">Restuarant owners</h2>
        <h1 className=" pb-[15px] leading-[30px] w-[275px] text-[20px] lg:text-[40px] font-bold lg:leading-[50px] lg:w-[300px]">CLAIM YOUR RESTAURANT TODAY!</h1>
        <p className="pb-[20px] text-[14px] w-[310px] lg:w-[510px] lg:text-[17px] font-medium leading-5 lg:pt-0">Claim your restaurant on Reisty to take control of your online presence, manage reservations, menus, and reviews, and showcase your establishment to potential diners while maintaining full control."</p>
        <button className="p-1 rounded-xl bg-white text-black w-[130px] font-medium">See full list</button>
      </div>

      <div className="lg:h-[463px] w-[100%] lg:flex"> 
        <div className="text w-[60%] bg-[#F2F2F2] text-black py-[45px] pl-[18px] pr-[8px]" >
            <h2 className="text-[17px] font-bold">WAITLIST MANAGEMENT</h2>
            <h1 className="text-[40px] font-bold leading-[43px] py-5  w-[300px]">WAITLIST MANAGEMENT WITH REISTY</h1>
            <p className="w-[325px] text-[17px] pb-4 leading-5 font-medium">Maximize seating efficiency with Reisty's waitlist management tool. Estimate wait times, send SMS notifications, and increase revenue while improving customer satisfaction</p>
            <button className="py-4 px-6 rounded-xl bg-[#BC172F] text-white font-medium">Create a free account</button>
        </div>
        <div className="second lg:w-[40%]"></div>
      </div>
    </div>
  );
};

export default OwnersClaim;
