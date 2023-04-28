import React from "react";

const OwnersClaim = () => {
  return (
    <div className="w-[100%] grid grid-cols-2 mt-16 gap-5">
      <div className="first grid h-[463px] text-white py-[45px] pl-[30px]">
        <h2 className="text-[16px] font-bold">Restuarant owners</h2>
        <h1 className="text-[40px] font-bold leading-[50px] w-[300px]">CLAIM YOUR RESTAURANT TODAY!</h1>
        <p className="w-[510px] text-[17px] font-medium leading-5 pt-0">Claim your restaurant on Reisty to take control of your online presence, manage reservations, menus, and reviews, and showcase your establishment to potential diners while maintaining full control."</p>
        <button className="p-1 rounded-xl bg-white text-black w-[130px] font-medium">See full list</button>
      </div>
      <div className="h-[463px] w-[100%] flex"> 
        <div className="text w-[60%] bg-[#F2F2F2] text-black py-[45px] pl-[18px] pr-[8px]" >
            <h2 className="text-[17px] font-bold">WAITLIST MANAGEMENT</h2>
            <h1 className="text-[40px] font-bold leading-[43px] py-5  w-[300px]">WAILIST MANAGEMENT WITH REISTY</h1>
            <p className="w-[325px] text-[17px] pb-4 leading-5 font-medium">Maximize seating efficiency with Reisty's waitlist management tool. Estimate wait times, send SMS notifications, and increase revenue while improving customer satisfaction</p>
            <button className="py-4 px-6 rounded-xl bg-[#BC172F] text-white font-medium">Create a free account</button>
        </div>
        <div className="second w-[40%]"></div>
      </div>
    </div>
  );
};

export default OwnersClaim;
