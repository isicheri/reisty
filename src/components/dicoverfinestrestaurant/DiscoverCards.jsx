import React from 'react'
import Picthree from "../../assets/pic3.svg"
import Pictwo from "../../assets/pic2.svg"
import Picone from "../../assets/pic1.svg"
import Cardprops from '../cardFavourite/Cardprops'
import Imgbrown from "../../assets/imgbrown.svg"
import Imgbrown2 from "../../assets/imgbrown2.svg"
import Imgblue from "../../assets/imgblue.svg"
import Imgreen from "../../assets/imggreenchairs.svg"
import Arrow from "../../assets/seemorearrow.svg"
// import CardImg from "../../assets/cardimg1.png"
// import Card from '../cardFavourite/Card'
import OwnersClaim from '../restaurantOwners/OwnersClaim'


const DiscoverCards = () => {
  return (
    <div className='mt-[127px] px-16'>
        <div>
            <p className='text-[24px] font-medium text-[#000000] pb-[30px]'>Discover our finest restaurants</p>
        </div>
        <div className="cardpics grid grid-cols-4  gap-5">

            <div className="pic3">
                <img src={Pictwo} alt="" />
                <h1 className='pt-[20px] text-[18px] font-medium text-[#2B2B2B]'>Fine Dining</h1>
            </div>
            <div className="pic2">
            <img src={Picthree} alt="" />
            <h1 className='pt-[20px] text-[18px] font-medium text-[#2B2B2B]'>Buffet</h1>
            </div>
            <div className="pic1">
            <img src={Picone} alt="" />
            <h1 className='pt-[20px] text-[18px] font-medium text-[#2B2B2B]'>Family</h1>
            </div>
            <div className="pic1">
            <img src={Pictwo} alt="" />
            <h1 className='pt-[20px] text-[18px] font-medium text-[#2B2B2B]'>Cafes</h1>
            </div>
        </div>

        <div className='pb-6 flex items-center pr-6 mt-16'>
            <div className='flex-1'>
            <h1 className='text-[24px] font-medium'>Popular places</h1>
            <p className='text-[16px] font-normal text-[#2B2B2B]'>Discover the best restaurants in your local area</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h1 className='text-[#BC172F] font-medium text-[20px]'>See more</h1>
                <img src={Arrow} alt="" className='pt-2'/>
            </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 gap-5">
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        <Cardprops image={Imgbrown} name="Terra Kulture" location="Lagos, Nigeria" ratings="star"/>
        </div>

        <div>
            <OwnersClaim />
        </div>

        <div className='pb-6 flex items-center pr-6 mt-16'>
            <div className='flex-1'>
            <h1 className='text-[24px] font-medium'>Best restaurants in Africa</h1>
            <p className='text-[16px] font-normal text-[#2B2B2B]'>We have all the best restaurants in all of Africa for you</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h1 className='text-[#BC172F] font-medium text-[20px]'>See more</h1>
                <img src={Arrow} alt="" className='pt-2'/>
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

export default DiscoverCards