import React from "react";
import BeforeFooterImage from "../../assets/beforefooterphoneimage.png"
import Appstore from "../../assets/appstore.svg" 
import Playstore from "../../assets/playstore.svg" 

const BeforeFooter = () => {
  return (
    <>
      <div className="beforefooter flex gap-24 mt-16 w-[100%] pt-[47px] px-14">
        <div className="text_button w-[50%]">
          <h1 className=" text-white text-[32px] font-bold leading-9 w-[368px]">Discover the finest restaurants on Reisty</h1>

          <p className="text-white text-[16px] font-medium leading-[19px] mt-3">
            Download the app now and enjoy seamless restaurant reservations,
            personalized dining experiences, and more. Available on the App
            Store and Google Play Store. Get it today and elevate your dining
            adventures with Reisty.
          </p>

          <div className=" flex gap-5 mt-6 text-red-500">
            <div className=" p-3 px-4 bg-white rounded-md">
              <div className="flex gap-2">
                <div>
                <img src={Appstore} alt=""/>
                </div>
                <div>
                  <h2 className="text-[9.18px] font-medium">Download on the</h2>
                  <h1 className= "text-[15.3px] font-semibold">App Store</h1>
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
                  <h1 className= "text-[15.3px] font-semibold">App Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image w-[50%]">
          <img src={BeforeFooterImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default BeforeFooter;
