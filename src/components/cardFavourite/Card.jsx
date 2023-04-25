import React from 'react'
import Cardprops from './Cardprops'
import Imgbrown from "../../assets/imgbrown.svg"
import Imgbrown2 from "../../assets/imgbrown2.svg"
import Imgblue from "../../assets/imgblue.svg"
import Imgreen from "../../assets/imggreenchairs.svg"
import Arrow from "../../assets/seemorearrow.svg"

const Card = () => {
  return (
    <div className="px-16 w-[100%] mt-16">
        <div className='pb-6 flex items-center pr-6'>
            <div className='flex-1'>
            <h1 className='text-[24px] font-medium'>Featured Restaurants</h1>
            <p className='text-[16px] font-normal text-[#2B2B2B]'>Discover the best restaurants in your local area</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h1 className='text-[#BC172F] font-medium text-[20px]'>See more</h1>
                <img src={Arrow} alt="" srcset="" className='pt-2'/>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 gap-5">
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgblue} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgreen} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown2} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgblue} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgreen} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown2} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        </div>
    </div>
  )
}

export default Card