import React from 'react'
import champagneImg  from "../../../assets/champagne.jpg" 
import foodImg from "../../../assets/food1.jpg"

function MenuRestaurant() {
  return (
    <div className='mb-[50px] leading-[26px] text-[13px]'>
          <p>
          Explore the menu offerings at Orchid Bistro and discover the most popular dishes that people are craving! From appetizers to desserts, take a look at what's in store for you when you reserve a table at Orchid Bistro. You can also check out the prices to get an idea of what to expect, in addition to the flavors. Browse through the menu highlights from Orchid Bistro and let your taste buds indulge in the delectable offerings. We're already getting hungry just thinking about it...
          </p>

          <div className='w-2/7 flex justify-start items-center h-72 rounded-xl'>


                 <div className='bg-gray-300 flex justify-center items-center h-48 m-3 rounded-xl w-40 relative lg-max:text-[12px] lg-max:text-center'>
                 <p>BREAKFAST MENU</p>
                 </div>
                 <div className='bg-gray-300 h-48 m-3 rounded-xl w-40 relative flex justify-center items-center lg-max:text-[12px] lg-max:text-center'>
                    <p>LUNCH MENU</p>
                 </div>
                 <div className='bg-gray-300 h-48 m-3 rounded-xl w-40 relative flex justify-center items-center lg-max:text-[12px] lg-max:text-center'>
                    <p>DINNER MENU</p>
                 </div>

 
          </div>



          <div className='h-auto flex justify-center items-center flex-col w-2/7 bg-white border border-gray-400 rounded-xl'>
             <div className='w-full h-16 bg-[#BC172F] flex justify-start items-center p-9 rounded-t-lg'>
                 <p className='text-white text-lg p-3'>Menu Highlights</p>
             </div>


             <div className='w-full h-auto mt-11 p-4 flex justify-center items-center flex-col rounded-xl'>

                 <div className='w-full h-7 flex justify-start items-center text-white mb-7'>
                    <img src={champagneImg}/>
                    <p className='p-2 text-[#BC172F] text-lg'>CockTails</p>
                 </div>


                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#2B2B2B] text-lg pb-2'>Florence Spritz Aperol, Prosecco, Fever Tree Soda </p>
                    <p className='text-[#717171]'>Aperol, Prosecco, Fever Tree Soda</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='text-[#2B2B2B] text-lg'>₦18,000 </p>
                  </div>
                </div>
                 </div>



                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#2B2B2B] text-lg pb-2'>Florence Spritz Aperol, Prosecco, Fever Tree Soda </p>
                    <p className='text-[#717171]'>Aperol, Prosecco, Fever Tree Soda</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='text-[#2B2B2B] text-lg'>₦18,000 </p>
                  </div>
                </div>
                 </div>



                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#2B2B2B] text-lg pb-2'>Florence Spritz Aperol, Prosecco, Fever Tree Soda </p>
                    <p className='text-[#717171]'>Aperol, Prosecco, Fever Tree Soda</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='text-[#2B2B2B] text-lg'>₦18,000 </p>
                  </div>
                </div>
                 </div>


                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#2B2B2B] text-lg pb-2'>Florence Spritz Aperol, Prosecco, Fever Tree Soda </p>
                    <p className='text-[#717171]'>Aperol, Prosecco, Fever Tree Soda</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='text-[#2B2B2B] text-lg'>₦18,000 </p>
                  </div>
                </div>
                 </div>




             </div>



             
             <div className='w-full  h-auto mt-11 p-6 flex justify-center items-center flex-col'>
             <div className='w-full h-7 flex justify-start items-center text-white'>
                    <img src={foodImg}/>
                    <p className='p-2 text-[#BC172F] text-base'>Foods</p>
                 </div>

                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#BC172F] text-base'>Jollof Rice </p>
                    <p className='text-[#717171] text-left'>
                    Ingredients: rice, tomato paste, onion, red bell pepper, green bell pepper, scotch bonnet pepper, garlic, vegetable oil, salt, and pepper.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p> ₦18,000 </p>
                  </div>
                </div>
                 </div>


                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#BC172F] text-base'>Jollof Rice </p>
                    <p className='text-[#717171] text-left'>
                    Ingredients: rice, tomato paste, onion, red bell pepper, green bell pepper, scotch bonnet pepper, garlic, vegetable oil, salt, and pepper.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p> ₦18,000 </p>
                  </div>
                </div>
                 </div>

                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#BC172F] text-base'>Jollof Rice </p>
                    <p className='text-[#717171] text-left'>
                    Ingredients: rice, tomato paste, onion, red bell pepper, green bell pepper, scotch bonnet pepper, garlic, vegetable oil, salt, and pepper.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p> ₦18,000 </p>
                  </div>
                </div>
                 </div>

                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#BC172F] text-base'>Jollof Rice </p>
                    <p className='text-[#717171] text-left'>
                    Ingredients: rice, tomato paste, onion, red bell pepper, green bell pepper, scotch bonnet pepper, garlic, vegetable oil, salt, and pepper.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p> ₦18,000 </p>
                  </div>
                </div>
                 </div>

                 <div className='w-full h-auto p-4 flex items-center justify-center m-5 flex-col rounded-xl'>
                <div className='w-full h-1/2 flex justify-between'>
                  <div className=''>
                    <p className='text-[#BC172F] text-base'>Jollof Rice </p>
                    <p className='text-[#717171] text-left'>
                    Ingredients: rice, tomato paste, onion, red bell pepper, green bell pepper, scotch bonnet pepper, garlic, vegetable oil, salt, and pepper.
                    </p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <p> ₦18,000 </p>
                  </div>
                </div>
                 </div>





               </div>

          </div>



    </div>
  )
}

export default MenuRestaurant

