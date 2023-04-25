import React from "react";

const Cardprops = (props) => {
  return (
    <>
    <div className="">
      <div className="card bg-base-100 h-[55vh] w-[95%] border-2 border-gray-200">
        <div className="h-[35vh]">
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className="card-body p-6">
          <h2 className="card-title text-[20px] text-[#2B2B2B] font-medium">{props.name}</h2>
          <p>{props.location}</p>
          <div className="card-actions text-[16px] text-[#2B2B2B] font-normal">
            <button className="btn">{props.ratings}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cardprops;
