import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RectangularGreen from "../../assets/rectangulargreen.png";
import DoubleImg from "../../assets/doubleimg.png";
import React from "react";

const RestaurantProfile = () => {
  return (
    <>
      <div  className=" overflow-x-hidden">
        <div>
          <Navbar />
        </div>

        <div className="w-full mt-6 px-[6rem] ">
          <div className=" flex gap-1 items-center">
            <div className="">
              <img src={RectangularGreen} alt="" />
            </div>
            <div className="">
              <img src={DoubleImg} alt="" />
            </div>
          </div>
          <div className="flex items-center mt-4 gap-5">
            <div
              className="w-[70%] h-[80vh]"
              style={{ border: "1px solid red" }}
            >
              <div className="">
                <div
                  style={{
                    border: "1px solid red",
                    marginBottom: "2rem",
                    height: "15vh",
                  }}
                >
                  <div className=" flex items-center">
                    <div className=" flex-1 gap-3">
                      <h1 className=" font-medium text-[35px] leading-9 text-[#2B2B2B]">
                        Orchid Bistro
                      </h1>
                      <p className="text-[17px] font-normal text-[#2B2B2B]">
                        Akoka,Lagos.American
                      </p>
                      <h1 className="text-[13px] font-semibold text-[#2B2B2B]">
                        ₦₦
                      </h1>
                    </div>

                    <div
                      className="flex items-center gap-3 h-[50px]"
                      style={{ border: "1px solid green" }}
                    >
                      <button className="p-3">Save</button>
                      <button className="p-3">Favorite</button>
                      <button className="p-3">Share</button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid red",
                    marginBottom: "2rem",
                    height: "25vh",
                  }}
                >
                  div
                </div>
                <div
                  style={{
                    border: "1px solid red",
                    marginBottom: "2rem",
                    height: "25vh",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="w-[30%] h-[80vh]"
              style={{ border: "1px solid blue" }}
            ></div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RestaurantProfile;
