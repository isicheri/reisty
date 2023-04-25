import React from "react";

const OwnersClaim = () => {
  return (
    <div className="w-[100%] grid grid-cols-2 mt-16 gap-3">
      <div className="first h-[463px]" style={{border:"2px solid red"}}></div>
      <div className="h-[463px] w-[100%] flex" style={{border:"2px solid blue"}}>
        <div className="text w-[60%]" style={{border:"2px solid green"}}></div>
        <div className="second w-[40%]" style={{border:"2px solid yellow"}}></div>
      </div>
    </div>
  );
};

export default OwnersClaim;
