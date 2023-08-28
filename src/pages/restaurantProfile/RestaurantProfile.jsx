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
import React, { useContext, useState } from "react";
import ExperienceProp from "./ExperienceProp";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AboutRestaurant from "./components/AboutRestaurant";
import MenuRestaurant from "./components/MenuRestaurant";
import ReviewRestaurant from "./components/ReviewRestaurant";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import { DialogContext } from "../../App";
import SelectUi from "./ui/SelectUi";
import DateRangeComponent from "./ui/DateRangeComponent";




const RestaurantProfile = () => {

  const [activeTab, setActiveTab] = useState("about us")
  const {showDialog,setShowDialog} = useContext(DialogContext)


const data = [
  {
    value: "about us",
    comp: <AboutRestaurant />
  },
  {
    value: "menu",
    comp: <MenuRestaurant />
  },
  {
    value: "review",
    comp: <ReviewRestaurant />
  }
]


  return (
    <>
      <div className=" overflow-x-hidden">

        <div>
          <Navbar />
        </div>

        <div className="w-full mt-6 px-[6rem] lg-max:px-0">

          <div className=" flex gap-1 items-center lg-max:w-full lg-max:flex lg-max:items-center justify-center">
            <div className="">
              <img src={RectangularGreen} alt="" className="lg-max:h-60 lg-max:w-full lg-max:hidden" />
            </div>
            <div className="">
              <img src={DoubleImg} alt="" className="lg-max:h-60 lg-max:w-full lg-max:hidden"/>
            </div>


            {/* second image holder */}
            <div className="hidden lg-max:flex lg-max:w-full lg-max:h-60 lg-max:relative lg-max:m-0">
              <img src={RectangularGreen} alt="" className="lg-max:h-60 lg-max:w-full"/>
              <div className="lg-max:w-full lg-max:h-20 lg-max:absolute lg-max:bottom-0 lg-max:flex lg-max:items-center p-3 lg-max:justify-end">
                {/* // button */}
                <button className="h-[50px] w-[50px] p-[7px] rounded-full border border-[#BC172F] font-normal flex items-center gap-2 m-2 text-[#BC172F] justify-center text-[14px] bg-white">
                        <AiOutlineStar className="text-[30px]" />
                      </button>
                      <button className="h-[50px] w-[50px] p-[7px] rounded-full border border-[#BC172F] font-normal flex items-center gap-2 m-2 text-[#BC172F] justify-center text-[14px] bg-white">
                      <AiOutlineHeart className="text-[30px]" />
                      </button>
                      <button className="h-[50px] w-[50px] p-[7px] rounded-full border border-[#BC172F] font-normal flex items-center gap-2 m-2 text-[#BC172F] justify-center text-[30px] bg-white">
                      <AiOutlineShareAlt className="text-[30px]" />
                      </button>
              </div>
            </div>0

          </div> 



          <div className="flex items-center mt-4 gap-5">


            <div className=" flex gap-10 mb-12 lg-max:flex lg-max:h-auto lg-max:flex-col lg-max:items-center lg-max:justify-center lg-max:p-3 lg-max:w-full">



              <div className="w-[67%] lg-max:w-full">

                <div
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <div className=" flex items-center lg-max:h-28 lg-max:flex lg-max:items-center lg-max:justify-center lg-max:w-full">

                    <div className=" flex-1 gap-[12px] lg-max:w-full lg-max:p-2">
                      <h1 className=" font-medium text-[15px] leading-9 text-[#2B2B2B] sm:text-[35px]">
                        Orchid Bistro
                      </h1>
                      <p className="text-[14px] font-normal text-[#2B2B2B] sm:text-[17px]">
                        Akoka,Lagos.American
                      </p>
                      <h1 className="text-[13px] font-semibold text-[#2B2B2B] sm:text-[13px]">
                        ₦₦
                      </h1>
                    </div>

                    <div className="flex items-center gap-[13px] h-[50px] lg-max:hidden">
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


           


                {/* <div
                  style={{
                    borderBottom: "1px solid #DADADA",
                    marginBottom: "1rem",
                    minHeight: "fit-content",
                    display: "flex",
                    gap: "40px",
                  }}
                >
                  <p className=" act w-fit pb-[23px] ">About Us</p>
                  <p className=" border-b-[px] w-fit pb-[23px]">Menu</p>
                  <p className=" border-b-[px] w-fit pb-[23px]">Reviews</p>
                </div> */}



              <Tabs value={activeTab}>

                  <TabsHeader  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-red-700 shadow-none rounded-none",
        }}>
           {data.map(({ value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-red-700 text-lg pb-5" : "text-lg pb-5"}
          >
            {value}
          </Tab>
        ))}
        </TabsHeader>

        <TabsBody>
        {data.map(({ value, comp }) => (
          <TabPanel key={value} value={value}>
            <div className="h-auto">
              {
               comp
              }
            </div>
          </TabPanel>
        ))}
      </TabsBody>
              </Tabs>
              </div>


              <div className="w-[33%] lg-max:w-full lg-max:h-auto"
              >
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
                <div className="mt-[41px] border lg-max:m-3">
                <img src={map} alt="" className="lg-max:w-full"/>
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

              <div className="hidden lg-max:flex lg-max:justify-center lg-max:items-center bg-red-700 h-[60px] lg-max:w-full lg-max:mt-7 lg-max:rounded-lg">
             <p>Book Now</p>
              </div>

              </div>


            </div>



          </div>




        </div>

        <div>
          <Footer />
        </div>

       {showDialog && <div className="fixed inset-0 bg-opacity-50 bg-black z-50 flex justify-center items-center">
                   
                   <div className="bg-[#FFFFFF] max-h-[95vh] overflow-y-auto w-1/2 border-2 z-50 rounded-t">
                

                      <div className="w-full h-36 flex justify-betweeen items-center border-b-2 border-[#DADADA]">
                            <div className="w-9/12 h-fit text-white p-2">
                              <div className="border-b-2 border-[#BC172F] mb-4 w-28"> 

                              <p className="text-black text-lg">Reservation</p>
                              </div>
                              <h3 className="text-black">Orchidbistro Premium Table</h3>
                            </div>
                            <div className="w-1/4 flex justify-end items-center p-5">
                               <div onClick={() => setShowDialog(false)}>
                                <HighlightOffSharpIcon fontSize="large"/>
                               </div>
                            </div>
                      </div>
   

                      <div className="h-[500px] w-full p-6 flex justify-center items-center">
 
                        <div  className="w-full h-[480px] rounded-lg border-2 border-[#DADADA] p-3 flex justify-between items-center flex-col">
                         <div className="w-full bordder-2 rounded-lg h-[90px] flex justify-center items-center p-2">
                           <SelectUi />
                          <SelectUi />
                         </div>
                         <div className="w-full h-96 mt-2 rounded-lg">
                          <DateRangeComponent />
                         </div>
                        </div>
                       
                      </div>



                     <div className="w-full h-20 bg-blue-gray-400 flex items-center justify-center">
                       <div>
                        
                       </div>
                     </div>

                     {/* <div className="w-full h-52 bg-black">

                     </div> */}
                    
                   </div>

            </div>}

      </div>
    </>
  );
};

export default RestaurantProfile;
