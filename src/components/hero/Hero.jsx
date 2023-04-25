import React from 'react'

const Hero = () => {
    var user = "me"
  return (
    <>
    <div className="hero lg:w-[100%] h-[93vh] text-center flex pt-28 justify-center">
       <div className="text items-center font-bold text-white text-[45px] leading-[55px] w-[745px]">
       <div className="h2 pb-[20px]">
            <h2>Discover the perfect table for any occasion with ease.</h2>
        </div>

        <div className="w-[839px] text-[17px] flex items-center text-center font-medium leading-[22px] pr-16">
            <p className='w-[839px]'>Browse through a wide selection of restaurants and effortlessly find the perfect table for any occasion, whether it's a romantic dinner for two, a birthday celebration with friends, or a business meeting with colleagues.</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Hero


