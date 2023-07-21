import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RectangularGreen from "../../assets/rectangulargreen.png";
import DoubleImg from "../../assets/doubleimg.png";
import map from "../../assets/maplocation.svg"
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import React from "react";
import ExperienceProp from "./ExperienceProp";

const RestaurantProfile = () => {
  return (
    <>
      <div className=" overflow-x-hidden">
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
            <div className=" flex gap-10 mb-12">
              <div className="w-[67%]">
                <div
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <div className=" flex items-center">
                    <div className=" flex-1 gap-[12px]">
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

                    <div className="flex items-center gap-[13px] h-[50px]">
                      <button className="restaurant-profile-btns p-[7px] rounded-[6px] border border-[#BC172F] text-[14px] text-[#BC172F] font-normal flex items-center gap-2">
                        <AiOutlineStar className="text-[18px]" /> Save
                      </button>
                      <button className="restaurant-profile-btns p-[7px] rounded-[6px] border border-[#BC172F] text-[14px] text-[#BC172F] font-normal flex items-center gap-2">
                        <AiOutlineHeart className="text-[18px]" /> Favoutite
                      </button>
                      <button className="restaurant-profile-btns p-[7px] rounded-[6px] border border-[#BC172F] text-[14px] text-[#BC172F] font-normal flex items-center gap-2">
                        <AiOutlineShareAlt className="text-[20px]" /> Share
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #DADADA",
                    marginBottom: "1rem",
                    minHeight: "fit-content",
                    display: "flex",
                    gap: "40px",
                  }}
                >
                  <p className=" act w-fit pb-[23px]">About Us</p>
                  <p className=" border-b-[px] w-fit pb-[23px]">Menu</p>
                  <p className=" border-b-[px] w-fit pb-[23px]">Reviews</p>
                </div>
                <div className=" mb-[50px] leading-[26px] text-[13px]">
                  <p>
                    Orchid Bistro is a contemporary restaurant located in the
                    heart of Surulere, Lagos. The restaurant's interior design
                    is inspired by the beauty of orchids, with elegant décor and
                    soothing colors that create a relaxing atmosphere. Orchid
                    Bistro's culinary team is dedicated to offering the highest
                    quality dishes, featuring locally sourced ingredients and
                    creative flavor combinations. The menu offers a variety of
                    appetizers, entrees, and desserts, with vegetarian and
                    gluten-free options available. The restaurant also features
                    a full-service bar with a carefully curated wine list and
                    handcrafted cocktails. Whether you're looking for a romantic
                    dinner or a night out with friends, Orchid Bistro is the
                    perfect spot for an unforgettable dining experience.{" "}
                    <span className=" text-[#BC172F]">+More</span>
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <ExperienceProp />
                  <ExperienceProp />
                  <ExperienceProp />
                </div>
              </div>

              <div className="w-[33%]">
                <div
                  className="py-[20px] px-[30px]"
                  style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" }}>
                  <div className=" mb-2">
                    <h1>Orchid Bistro</h1>
                  </div>
                  <div className="flex gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                    >
                      <path
                        d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z"
                        fill="#BC172F"
                      />
                    </svg>
                    <span>Akoka.Lagos</span>
                  </div>
                  <div className="h-[32vh] border my-[31px] rounded-[13px]">
                    <div className="flex justify-between items-center">
                      <div></div>
                      <div></div>
                    </div>
                    <div></div>
                  </div>
                  <div className="font-medium text-[16px] bg-red-700 py-2 text-center rounded-full  text-white">
                    Search
                </div>
                </div>
                <div className="mt-[41px] border">
                <img src={map} alt="" />
              </div>

              <div className="flex py-[37px] px-[30px] justify-center border">
                <div className="flex flex-col text-[#BC172F] gap-5">
                  <div>
                  <div className="text-[#2B2B2B] font-medium">Orchid Bistro</div>
                  <div className="text-[#2B2B2B] text-[15px]">No. 23, Ocean View Drive, Orchid Road, Lekki Peninsula, Lagos, Nigeria.</div>
                  </div>
                  <div>+234 80 6133 2918</div>
                  <div>Get Directions</div>
                  <div>https:orchid-bistro.com</div>
                  <div>Orchidbistro@gmail.com</div>
                  <div>Frequently Asked Questions</div>
                  <div>View Menu</div>
                  <div>VReservation Hours</div>
                </div>
              </div>
              </div>
            </div>
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
