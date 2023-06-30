import React from "react";
import BeforeFooterImage from "../../assets/beforefooterphoneimage.png";
import Appstore from "../../assets/appstore.svg";
import Playstore from "../../assets/playstore.svg";

const BeforeFooter = () => {
  return (
    <>
      <div className="beforefooter px-[16px] lg:flex lg:gap-24 mt-16 w-[100%] lg:pt-[47px] lg:px-14">
        <div className="text_button w-[20%] lg:w-[50%]">
          <h1 className=" text-center text-[25px] leading-[39px] w-[358px] lg:text-start text-white lg:text-[32px] font-bold lg:leading-9 lg:w-[368px]">
            Discover the finest restaurants on Reisty
          </h1>

          <p className="text-white text-center lg:text-start w-[350px] lg:w-[559px] text-[14px] lg:text-[16px] font-medium leading-[19px] mt-3">
            Download the app now and enjoy seamless restaurant reservations,
            personalized dining experiences, and more. Available on the App
            Store and Google Play Store. Get it today and elevate your dining
            adventures with Reisty.
          </p>

         <div className="flex w-[100vw] gap-4  text-red-500 mx-12 lg:hidden">
           <div className=" mt-4 py-3 w-32 pl-2 bg-white rounded-md">
            <div className="flex gap-2">
              <div>
                <img src={Appstore} alt="" />
              </div>
              <div>
                <h2 className="text-[9.18px] font-medium">Download on the</h2>
                <h1 className="text-[15.3px] font-semibold">App Store</h1>
              </div>
            </div>
          </div>

          <div className=" mt-4 py-3 w-32 pl-2 bg-white rounded-md">
            <div className="flex gap-2">
              <div>
                <img src={Playstore} alt="" />
              </div>
              <div>
                <h2 className="text-[9.18px] font-medium">Get it on the</h2>
                <h1 className="text-[15.3px] font-semibold">Play Store</h1>
              </div>
            </div>
          </div>

         </div>
          <div className=" hidden gap-5 mt-6 text-red-500 lg:flex">
            <div className=" lg:py-3 lg:px-4 py-3 px-16 bg-white rounded-md">
              <div className="flex gap-2">
                <div>
                  <img src={Appstore} alt="" />
                </div>
                <div>
                  <h2 className="text-[9.18px] font-medium">Download on the</h2>
                  <h1 className="text-[15.3px] font-semibold">App Store</h1>
                </div>
              </div>
            </div>

            <div className=" py-3 px-4 bg-white rounded-md">
              <div className="flex gap-2">
                <div>
                  <img src={Playstore} alt="" />
                </div>
                <div>
                  <h2 className="text-[9.18px] font-medium">Get it on</h2>
                  <h1 className="text-[15.3px] font-semibold">Play Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image w-[50%] mx-auto pt-4">
          <img src={BeforeFooterImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default BeforeFooter;
