import React from 'react'
import Logo from "../../assets/footerlogo.svg"

const Footer = () => {
  return (
    <div className='mt-16 h-[80vh] w-[100%] bg-[#2B2B2B] gap-8 text-[#FFFFFF] px-16'>
        <div className="footerTop flex gap-16 py-10 w-[100%]">
            <div className='h-[200px] w-[33%] grid grid-cols-1 gap-5'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="paragraph">
                    <p>With its innovative use of technology, Reisty is revolutionizing the hospitality industry by providing cutting-edge solutions to some of the world's finest dining establishments.</p>
                </div>
                <div className="socials flex gap-7">
                    <div className="facebook p-3 rounded-full" style={{border:"2px solid white"}}></div>
                    <div className="instagram p-3 rounded-full" style={{border:"2px solid white"}}></div>
                    <div className="discord p-3 rounded-full" style={{border:"2px solid white"}}></div>
                    <div className="twitter p-3 rounded-full" style={{border:"2px solid white"}}></div>
                </div>
            </div>
            <div className='w-[63%]'>
                <div className='w-[100%] grid grid-cols-4 gap-5'>
                    <div className="">
                        <ul className='grid gap-3'>
                            <li className='text-[20px] font-medium'>Discover</li>
                            <li className='border-b-2 w-[35px] border-white'></li>
                            <li className='text-[16px]'>Trending restuarants</li>
                            <li className='text-[16px]'>Nearby restuarants</li>
                            <li className='text-[16px]'>New on reisty</li>
                            <li className='text-[16px]'>Events</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className='grid gap-3'>
                            <li className='text-[20px] font-medium'>About</li>
                            <li className='border-b-2 w-[35px] border-white'></li>
                            <li className='text-[16px]'>About us</li>
                            <li className='text-[16px]'>Terms and Conditions</li>
                            <li className='text-[16px]'>Privacy policy</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className='grid gap-3'>
                            <li className='text-[20px] font-medium'>Top Facilities</li>
                            <li className='border-b-2 w-[35px] border-white'></li>
                            <li className='text-[16px]'>5 star Dining</li>
                            <li className='text-[16px]'>Rooftop</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className='grid gap-3'>
                            <li className='text-[20px] font-medium'>For Restuarants</li>
                            <li className='border-b-2 w-[35px] border-white'></li>
                            <li className='text-[16px]'>Reisty Overview</li>
                            <li className='text-[16px]'>Plans and Pricing</li>
                            <li className='text-[16px]'>Features</li>
                            <li className='text-[16px]'>Help Desk</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="footerbottom h-[80px] w-[100%] mt-16 border-white  border-t-[1px]">
            <div className='flex justify-between pt-6 text-[14px]'>
                <div><p>&copy; 2022 Reisty.  All rights reserved.</p></div>
                <div className='flex gap-5'>
                    <p>Global Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer